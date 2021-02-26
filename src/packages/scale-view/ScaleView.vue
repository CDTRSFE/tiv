<template>
    <div ref="wrapEle" class="t-scale-view">
        <div ref="containerEle" :style="containerStyle" class="container">
            <slot v-if="show"></slot>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, watch } from 'vue';
import type { PropType } from 'vue';
import { resizeEvent } from '../hooks';
// import setRem from '../utils/setRem';

const ratioDefault = '1.75:1';
const splitStrToNum = (str: string) => str.split(':').map(item => Number(item));
const resolveRatio = (ratio: string) => {
    const [w, h] = splitStrToNum(ratioValidator(ratio) ? ratio : ratioDefault);
    return w / h;
};
const ratioValidator = (value: string) => {
    const size = splitStrToNum(value);
    return typeof value === 'string' &&
        size.length === 2 &&
        size.every(item => item > 0);
};

declare global {
    interface Window { rem: number; }
}

export default defineComponent({
    name: 'TScaleView',
    props: {
        ratio: {
            type: String,
            default: ratioDefault,
            validator: ratioValidator,
        },
        enableRem: {
            type: Boolean,
            default: true,
        },
        baseMethod: {
            type: Function as PropType<(width: number) => number>,
            default: (width: number) => width / 1920 * 100,
        },
    },
    setup(props) {
        // 设置宽高前不显示内容
        const show = ref(false);
        // 容器外层 element
        const containerEle = ref<HTMLElement>(null);
        // 容器的宽高样式
        const containerStyle = ref({});
        const setRem = (width: number) => {
            if (!props.enableRem) return;
            const root = document.querySelector('html');
            const rem = props.baseMethod(width);
            window.rem = rem;
            root.style.fontSize = rem + 'px';
        };
        const setSize = () => {
            const parent = containerEle.value.parentElement;
            const wrapW = parent.clientWidth;
            const wrapH = parent.clientHeight;
            const ratioValue = resolveRatio(props.ratio);
            let width = wrapW;
            let height = wrapH;
            if (ratioValue > width / height) {
                height = wrapW / ratioValue;
            } else {
                width = wrapH * ratioValue;
            }
            containerStyle.value = {
                width: width + 'px',
                height: height + 'px',
            };
            show.value = true;
            setRem(width);
        };
        onMounted(setSize);
        watch(() => props.ratio, setSize);
        resizeEvent(setSize);

        return { show, containerEle, containerStyle };
    },
});
</script>
<style lang="less" scoped>
@import '../../styles/resources.less';
.t-scale-view {
    .t-p0();
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.container {
    .t-bsb();
}
</style>
