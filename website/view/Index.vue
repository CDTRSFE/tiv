<template>
    <t-scale-view ratio="3:1" :size-method="fn" enable-rem class="bg-yellow">
        <div class="bg-blue h100">
            <div class="box1 bg-red center">
                font-size: {{ font }}px
            </div>
        </div>
    </t-scale-view>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    name: 'ViewIndex',
    setup() {
        const font = ref(0);
        onMounted(() => {
            font.value = window.rem;
        });
        const fn = width => width / 20;
        return {
            font,
            fn,
        };
    },
};
</script>

<style scoped lang="less">
.box1 {
    width: 16rem;
    height: 2rem;
}
</style>
