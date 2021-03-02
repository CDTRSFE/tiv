<template>
    <span :class="[highlight ? 't-order-' + index : '', {'t-checked': checked}, 't-type-' + type]" class="t-index-text">{{ index }}</span>
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
