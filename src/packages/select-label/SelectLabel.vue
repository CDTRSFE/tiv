<template>
    <div class="select-label">
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TSelectLabel',
    props: {},
    setup() {
        //
    },
});
</script>
<style scoped lang="less">
@import '../../styles/var.less';
.select-label {
    color: @theme-color;
}
</style>
