<template>
    <div v-if="scaleBody" :style="containerStyle" class="t-scale-view">
        <slot v-if="show"></slot>
    </div>
    <div v-else class="t-scale-view t-scale-box">
        <div ref="containerEle" :style="containerStyle" class="t-container">
            <slot v-if="show"></slot>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch, nextTick, onMounted } from 'vue';
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
        // 容器父级
        const parentEle = ref<HTMLElement>();
        // 根节点
        let htmlEle: HTMLHtmlElement;

        const setParentEle = () => {
            htmlEle = document.querySelector('html');
            parentEle.value = props.scaleBody ? htmlEle : containerEle.value.parentElement;
        };

        const setSize = () => {
            const wrapW = parentEle.value.clientWidth;
            const wrapH = parentEle.value.clientHeight;
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
                htmlEle.classList.add('t-flex');
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

        onMounted(setParentEle);
        resizeEvent(parentEle, setSize);
        watch(() => props.baseSize, async() => {
            await nextTick();
            setSize();
        });

        return { show, containerEle, containerStyle, setSize };
    },
});
</script>
