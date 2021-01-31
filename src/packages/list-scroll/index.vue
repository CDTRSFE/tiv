<template>
    <div class="list-scroll">
        <p class="text">123</p>
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TListScroll',
    props: {},
    setup() {
        // init here
        // console.log(props);
    },
});
</script>
<style lang="less" scoped>
@import '~@/styles/var.less';
.list-scroll {
    .text {
        background: @border-color;
    }
}
</style>
