<template>
    <div class="t-no-data">
        <slot>
            <img v-if="image" :src="image" class="t-image" alt="" />
            <i v-else class="tiv-font t-icon-empty t-icon"></i>
            <p class="t-des">{{ description }}</p>
        </slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TNoData',
    props: {
        image: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '暂无数据',
        },
    },
});
</script>
