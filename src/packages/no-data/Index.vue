<template>
    <div class="t-no-data">
        <slot>
            <img v-if="image" :src="image" class="image" alt="" />
            <i v-else class="tiv-font t-icon-empty icon"></i>
            <p class="des">{{ description }}</p>
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
<style lang="less" scoped>
@import '../../styles/resources.less';
.t-no-data {
    .t-bsb;
    .t-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    color: @info-text-color;
    font-size: 14px;
    .image {
        height: 100px;
        margin-bottom: 10px;
    }
    .des {
        font-size: 14px;
    }
    .icon {
        color: tint(@info-text-color);
        margin-bottom: 10px;
        font-size: 40px;
    }
}
</style>
