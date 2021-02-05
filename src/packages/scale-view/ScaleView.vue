<template>
    <div class="scale-view">
        <div ref="contentEle" class="content">
            <slot v-if="show"></slot>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'TScaleView',
    props: {
        scale: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        //
        const show = ref(false);
        const contentEle = ref<HTMLElement>(null);
        onMounted(() => {
            if (!props.scale) {
                show.value = true;
                return;
            }
            const ele = contentEle.value;
            const width = ele.clientWidth;
            const height = ele.clientHeight;
        });

        return { show, contentEle };
    },
});
</script>
<style lang="less" scoped>
.scale-view {
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 100vw;
    // height: 100vh;
    padding: 0;
    overflow: hidden;
    .content {
        width: 100%;
        height: 100%;
    }
}
</style>
