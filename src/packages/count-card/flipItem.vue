<template>
    <div ref="flipEle" class="t-flip-item">
        <div ref="oldEle" class="t-text-box t-old-top">
            <div class="t-text">
                <slot :v="oldText">
                    <span class="t-val">{{ oldText }}</span>
                </slot>
            </div>
        </div>
        <div class="t-text-box t-old-bottom">
            <div class="t-text">
                <slot :v="oldText">
                    <span class="t-val">{{ oldText }}</span>
                </slot>
            </div>
        </div>
        <div class="t-text-box t-new-top">
            <div class="t-text">
                <slot :v="newText">
                    <span class="t-val">{{ newText }}</span>
                </slot>
            </div>
        </div>
        <div ref="newEle" class="t-text-box t-new-bottom">
            <div class="t-text">
                <slot :v="newText">
                    <span class="t-val">{{ newText }}</span>
                </slot>
            </div>
        </div>
        <div class="t-text-copy">
            <div class="t-text">
                <slot :v="oldText">
                    <span class="t-val">{{ oldText }}</span>
                </slot>
            </div>
        </div>
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
