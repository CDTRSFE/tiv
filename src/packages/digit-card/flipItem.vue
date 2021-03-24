<template>
    <div ref="flipEle" class="t-flip-item">
        <p ref="oldEle" class="t-text-box t-old-top">
            <span class="t-text">{{ oldText }}</span>
        </p>
        <p class="t-text-box t-old-bottom">
            <span class="t-text">{{ oldText }}</span>
        </p>
        <p class="t-text-box t-new-top">
            <span class="t-text">{{ newText }}</span>
        </p>
        <p ref="newEle" class="t-text-box t-new-bottom">
            <span class="t-text">{{ newText }}</span>
        </p>
        <p class="t-text-copy">
            <span class="t-text">{{ oldText }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { ref, watch, nextTick } from 'vue';
import throttle from 'lodash/throttle';

export default {
    name: 'FlipItem',
    props: {
        data: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const flipEle = ref<HTMLElement>();
        const oldEle = ref<HTMLElement>();
        const newEle = ref<HTMLElement>();
        const oldText = ref(props.data);
        const newText = ref(props.data);
        // 动画时长
        const time = 800;

        const slide = async(v: string) => {
            newText.value = v;
            await nextTick();
            oldEle.value.classList.add('t-flip-old');
            newEle.value.classList.add('t-flip-new');
            setTimeout(() => {
                if (!oldEle.value || !newEle.value) return;
                oldEle.value.classList.remove('t-flip-old');
                newEle.value.classList.remove('t-flip-new');
                oldText.value = v;
            }, time);
        };

        // 保证动画能完成
        const cb = throttle(slide, time * 1.2);
        watch(() => props.data, cb);

        return {
            oldText,
            newText,
            oldEle,
            newEle,
            flipEle,
        };
    },
};
</script>
