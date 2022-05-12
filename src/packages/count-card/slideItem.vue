<template>
    <div class="t-slide-item">
        <div v-if="/\d/.test(data)" ref="boxEle" class="t-text-box">
            <div class="t-text t-new t-up">
                <slot :v="newText">
                    <span class="t-val">{{ newText }}</span>
                </slot>
            </div>
            <div class="t-text t-old">
                <slot :v="oldText">
                    <span class="t-val">{{ oldText }}</span>
                </slot>
            </div>
            <div class="t-text t-new t-down">
                <slot :v="newText">
                    <span class="t-val">{{ newText }}</span>
                </slot>
            </div>
        </div>
        <div v-else class="t-text t-not-num">
            <slot :v="data">
                <span class="t-val">{{ data }}</span>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, watch, nextTick } from 'vue';
import throttle from 'lodash/throttle';

export default {
    name: 'SlideItem',
    props: {
        data: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const boxEle = ref<HTMLElement>();
        const oldText = ref(props.data);
        const newText = ref(props.data);
        // 动画时长
        const time = 300;

        const slide = async(v: string) => {
            newText.value = v;
            await nextTick();
            const box = boxEle.value;
            if (!box) return;
            box.style.transition = time / 1000 + 's';
            box.classList.add(newText.value < oldText.value ? 't-down' : 't-up');
            setTimeout(() => {
                box.style.transition = '0s';
                box.classList.remove('t-up', 't-down');
                oldText.value = v;
            }, time);
        };

        // 保证动画能完成
        const cb = throttle(slide, time * 1.2);

        watch(() => props.data, cb);

        return {
            oldText,
            newText,
            boxEle,
        };
    },
};
</script>
