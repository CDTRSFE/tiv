<template>
    <div v-if="scaleBody" :style="containerStyle" class="t-scale-view">
        <slot v-if="show"></slot>
    </div>
    <div v-else class="t-scale-view scale-box">
        <div ref="containerEle" :style="containerStyle" class="container">
            <slot v-if="show"></slot>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, watch, nextTick } from 'vue';
import { resizeEvent } from '../hooks';

const defaultSize = '1920*1080';
const splitStrToNum = (str: string) => str.split('*').map(item => Number(item));
const resolveSize = (size: string) => {
    const [w, h] = splitStrToNum(sizeValidator(size) ? size : defaultSize);
    return { w, h };
};
const sizeValidator = (value: string) => {
    const size = splitStrToNum(value);
    return typeof value === 'string' &&
        size.length === 2 &&
        size.every(item => item > 0);
};

export default defineComponent({
    name: 'TScaleView',
    props: {
        baseSize: {
            type: String,
            default: defaultSize,
            validator: sizeValidator,
        },
        scaleBody: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        // 设置宽高前不显示内容
        const show = ref(false);
        // 容器
        const containerEle = ref<HTMLElement>(null);
        // 容器的宽高样式
        const containerStyle = ref({});

        const setSize = async() => {
            await nextTick();
            const html = document.querySelector('html');
            const parent = props.scaleBody ? html : containerEle.value.parentElement;
            const wrapW = parent.clientWidth;
            const wrapH = parent.clientHeight;
            const size = resolveSize(props.baseSize);
            let ratio = 1;
            if (size.w / size.h > wrapW / wrapH) {
                ratio = wrapW / size.w;
            } else {
                ratio = wrapH / size.h;
            }
            const style = {
                width: size.w + 'px',
                height: size.h + 'px',
            };
            if (props.scaleBody) {
                containerStyle.value = style;
                html.classList.add('t-flex');
                const bodyStyle = {
                    ...style,
                    flex: '0 0 auto',
                };
                for (const k in bodyStyle) {
                    document.body.style[k] = style[k];
                }
                document.body.style.transform = `scale(${ratio})`;
            } else {
                containerStyle.value = {
                    ...style,
                    transform: `scale(${ratio})`,
                };
            }
            show.value = true;
        };

        onMounted(setSize);
        watch(() => props.baseSize, setSize);
        resizeEvent(setSize);

        return { show, containerEle, containerStyle, setSize };
    },
});
</script>
<style lang="less" scoped>
@import '../../styles/resources.less';
.t-scale-view {
    overflow: hidden;
    .container {
        .t-bsb();
        flex: 0 0 auto;
    }
}
.scale-box {
    .t-flex;
    width: 100vw;
    height: 100vh;
}
</style>
