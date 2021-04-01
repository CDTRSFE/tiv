<template>
    <div ref="wrapEle" class="t-text-marquee">
        <component :is="componentName" :hover-pause="hoverPause" :step="step" class="t-text-marquee-wrap">
            <ul :style="{minWidth: wrapWidth * 1.1 + 'px'}" class="t-text-marquee-list">
                <li v-for="(list, index) in dataGroup" :key="index" class="t-scroll-bar">
                    <span
                        v-for="(item) in list"
                        :key="item.id"
                        :style="item.style"
                        class="t-text-item"
                        @click="handleClick(item.data)"
                    >{{ item.data.text }}</span>
                </li>
            </ul>
        </component>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, nextTick, watch } from 'vue';
import { setStyle, getSize } from './useStyle';
import resizeEvent from '../hooks/resizeEvent';
import type { PropType } from 'vue';
import type { TextType, TextInfoType, ParamsType } from './type';

export default defineComponent({
    name: 'TTextMarquee',
    props: {
        data: {
            type: Array as PropType<TextType[]>,
            default: () => [],
        },
        // 文字的颜色
        colors: {
            type: Array as PropType<string[]>,
            default: () => [],
        },
        // 字体最大值 (px)
        maxFontSize: {
            type: Number,
            default: 30,
        },
        // 鼠标移入暂停
        hoverPause: {
            type: Boolean,
            default: false,
        },
        // 1s移动的距离 (px)
        step: {
            type: Number,
            default: 60,
        },
    },
    emits: ['click'],
    setup(props, ctx) {
        const dataGroup = ref<TextInfoType[][]>();
        const componentName = ref('div');
        const wrapWidth = ref(0);
        const wrapEle = ref<HTMLElement>();

        const init = () => {
            const wrapSize = getSize(wrapEle.value);
            wrapWidth.value = wrapSize.wrapW;
            const params: ParamsType = {
                data: props.data,
                colors: props.colors,
                maxFontSize: props.maxFontSize,
            };
            dataGroup.value = setStyle(wrapEle.value, params);
            nextTick(() => {
                // 列表渲染完成后再轮播
                componentName.value = props.data.length && wrapSize.wrapW && wrapSize.wrapH ? 't-carousel' : 'div';
            });
        };

        // wrapEle 宽高变化时，执行 init
        resizeEvent(wrapEle, init);
        watch(() => props.data, () => init());

        const handleClick = (v: TextType) => ctx.emit('click', v);

        return {
            dataGroup,
            componentName,
            handleClick,
            wrapWidth,
            wrapEle,
        };
    },
});
</script>
