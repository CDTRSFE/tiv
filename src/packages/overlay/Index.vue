<template>
    <teleport :disabled="!appendToBody" to="body">
        <transition name="t-fade" @after-enter="$emit('opened')" @after-leave="closed">
            <div
                v-show="modelValue"
                ref="overlayEle"
                :class="[$attrs.class, {'t-overlay-bg': !blur}]"
                :style="$attrs.style"
                class="t-overlay"
                @click="handleClickModal"
            >
                <transition name="t-move">
                    <div v-show="modelValue" @click.stop.self="handleClickModal">
                        <slot v-if="!destroySlot"></slot>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>
<script lang='ts'>
import { defineComponent, watch, ref, onBeforeUnmount, toRef, onMounted } from 'vue';
import { lockScreen, useModalEscape, useModalBlur } from '../hooks';

export default defineComponent({
    name: 'TOverlay',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        appendToBody: {
            type: Boolean,
            default: false,
        },
        closeOnPressEscape: {
            type: Boolean,
            default: true,
        },
        destroyOnClose: {
            type: Boolean,
            default: false,
        },
        lockScroll: {
            type: Boolean,
            default: true,
        },
        closeOnClickModal: {
            type: Boolean,
            default: true,
        },
        blur: {
            type: String,
            default: '',
        },
    },
    emits: ['opened', 'closed', 'change', 'update:modelValue'],
    setup(props, ctx) {
        const visible = toRef(props, 'modelValue');
        // 是否销毁 overlay 中的内容，(destroy-on-close = true)
        const destroySlot = ref(false);

        // 关闭 overlay
        const closeOverlay = () => ctx.emit('update:modelValue', false);

        // 关闭动画结束时的回调
        const closed = () => {
            ctx.emit('closed');
            if (props.destroyOnClose) destroySlot.value = true;
        };

        watch(visible, val => {
            if (val) {
                destroySlot.value = false;
            }
            ctx.emit('change', val);
            ctx.emit('update:modelValue', val);
        });

        // 组件卸载后关闭 overlay，例如切换路由后
        onBeforeUnmount(closeOverlay);

        // body 滚动锁定
        const overlayEle = ref<HTMLElement>();
        if (props.lockScroll) {
            onMounted(() => {
                lockScreen(overlayEle.value, visible);
            });
        }

        // escape 按键关闭 overlay
        if (props.closeOnPressEscape) {
            useModalEscape({
                handleClose: closeOverlay,
            }, visible);
        }

        // 点击自身关闭 overlay
        const handleClickModal = () => {
            if (props.closeOnClickModal) {
                closeOverlay();
            }
        };

        // body 模糊处理
        if (props.blur) {
            const el = document.querySelector(props.blur);
            if (!el) return;
            useModalBlur({
                rootEl: el,
                overlayEle,
            }, visible);
        }

        return {
            destroySlot,
            closed,
            overlayEle,
            handleClickModal,
        };
    },
});
</script>
