<template>
    <span :class="[highlight ? 'order-' + index : '', {checked}, 'type-' + type]" class="t-index-text">{{ index }}</span>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TIndexText',
    props: {
        index: {
            type: Number,
            required: true,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '1',
        },
        highlight: {
            type: Boolean,
            default: false,
        },
    },
});
</script>
<style lang="less" scoped>
@import '../../styles/resources.less';
.bg(@name) {
    background: url('./images/@{name}.png') no-repeat center center / auto 100%;
}
.t-index-text {
    .t-bsb;
    display: inline-block;
    text-align: center;
    font-family: sans-serif;
}
.type-1 {
    min-width: 18px;
    padding: 0 2px;
    color: #2a2a2a;
    line-height: 18px;
    border-radius: 2px;
    font-size: 14px;
    background-color: #d2d6dc;
    &.order-1 {
        background-color: #f76280;
        color: #fff;
    }
    &.order-2 {
        background-color: #ff853d;
        color: #fff;
    }
    &.order-3 {
        background-color: #ffbe5c;
        color: #fff;
    }
}
.type-2 {
    min-width: 20px;
    padding: 0 2px;
    color: #0dc2da;
    line-height: 18px;
    font-size: 14px;
    border: 1px solid #0dc2da;
    background-color: #0a4f70;
    &.order-1 {
        border-color: #e16333;
        background-color: #f7684b;
        color: #fff;
    }
    &.order-2 {
        border-color: #e18a33;
        background-color: #f7b364;
        color: #fff;
    }
    &.order-3 {
        border-color: #008ad1;
        background-color: #34b8e1;
        color: #fff;
    }
}
.type-3 {
    width: 65px;
    padding: 0 2px;
    line-height: 56px;
    font-size: 18px;
    color: #fff;
    .bg('type-3-n');
    &.checked {
        .bg('type-3-active-n');
    }
    &.order-1,
    &.order-2,
    &.order-3 {
        .bg('type-3-s');
        &.checked {
            .bg('type-3-active-s');
        }
    }
}
.type-4 {
    width: 18px;
    height: 18px;
    line-height: 18px;
    color: #0dc2da;
    font-size: 14px;
    border-radius: 50%;
    background: linear-gradient(to right, #1a65b7, #102d6b);
    font-weight: bold;
    &.order-1,
    &.order-2,
    &.order-3 {
        background: linear-gradient(to right, #1cb989, #12486a);
    }
}
</style>
