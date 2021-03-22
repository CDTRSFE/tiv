<template>
    <div class="t-slide-item">
        <p v-if="/\d/.test(data)" ref="boxEle" class="t-text-box">
            <span class="t-text t-new t-up">{{ newText }}</span>
            <span class="t-text t-old">{{ oldText }}</span>
            <span class="t-text t-new t-down">{{ newText }}</span>
        </p>
        <span v-else class="t-text">{{ data }}</span>
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
