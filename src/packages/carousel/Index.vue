<template>
    <div class="t-carousel" @mouseenter="hoverPause && pause()" @mouseleave="hoverPause && run()">
        <div ref="boxEle" :style="boxStyle" class="t-box">
            <div :style="contentStyle" :class="[isRow ? 't-row' : '']">
                <div ref="contentEle" class="t-content"><slot></slot></div>
                <div v-if="scroll" class="t-content"><slot></slot></div>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';

type directionType = 'left' | 'right' | 'up' | 'down';

export default defineComponent({
    name: 'TCarousel',
    props: {
        direction: {
            type: String as PropType<directionType>,
            default: 'left',
        },
        step: {
            type: Number,
            default: 60,
        },
        delay: {
            type: Number,
            default: 0,
        },
        hoverPause: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const contentEle = ref<HTMLElement>();
        // 是否暂停轮播
        const stop = ref(false);
        // 内容宽高，用于判断是否需要轮播
        const width = ref(0);
        const height = ref(0);
        // 是否需要轮播
        const scroll = ref(false);

        // 是否横向滚动
        const isRow = computed(() => !['up', 'down'].includes(props.direction));
        // 轮播动画样式
        const contentStyle = computed(() => {
            if (!scroll.value) return {};
            const distance = isRow.value ? width.value : height.value;
            return {
                animation: `
                    ${distance / props.step}s linear
                    ${props.delay || 0}ms both
                    ${stop.value ? 'paused' : 'running'} infinite
                    t-carousel-move-${props.direction}
                `,
            };
        });

        // 包裹内容的容器
        const boxEle = ref<HTMLElement>();

        // 容器偏移量样式
        const boxStyle = computed(() => {
            if (!scroll.value) return {};
            const d = props.direction;
            return d === 'right' ? {
                transform: 'translateX(100%)',
            } : d === 'down' ? {
                transform: 'translateY(100%)',
            } : {};
        });

        // 判断是否需要轮播
        const controlScroll = () => {
            const diffW = width.value - boxEle.value.clientWidth;
            const diffH = height.value - boxEle.value.clientHeight;
            scroll.value = true;
            if (isRow.value && diffW <= 0) scroll.value = false;
            if (!isRow.value && diffH <= 0) scroll.value = false;
        };

        // 初始化
        const init = () => {
            scroll.value = false;
            width.value = contentEle.value.offsetWidth;
            height.value = contentEle.value.offsetHeight;
            setTimeout(controlScroll, props.delay);
        };

        // 监听 dom，变化后重置轮播
        const setObserver = () => {
            const observer = new MutationObserver(init);
            observer.observe(contentEle.value, { childList: true, subtree: true });
            onUnmounted(() => observer.disconnect());
        };

        onMounted(() => {
            init();
            setObserver();
        });

        const run = () => { stop.value = false; };
        const pause = () => { stop.value = true; };

        return {
            contentEle,
            boxStyle,
            isRow,
            scroll,
            contentStyle,
            boxEle,

            run,
            pause,
        };
    },
});
</script>
