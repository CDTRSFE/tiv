<template>
    <div :class="'t-type-' + type" class="t-pagination">
        <div class="t-left-bg"></div>
        <div class="t-page">
            <div v-if="pageIndex === 1" class="t-prev t-disabled"></div>
            <div v-else class="t-prev" @click="handelChange(pageIndex - 1)"></div>
            <div class="t-space"></div>
            <div class="t-space"></div>
            <ul class="t-pagers">
                <template v-for="p in pagers" :key="p">
                    <li :class="{'t-active': pageIndex === p}" class="t-item" @click="handelChange(p)">
                        <p class="t-text">{{ p }}</p>
                    </li>
                    <li class="t-space"></li>
                </template>
            </ul>
            <div class="t-space"></div>
            <div v-if="pageIndex === pagerLength" class="t-next t-disabled"></div>
            <div v-else class="t-next" @click="handelChange(pageIndex + 1)"></div>
        </div>
        <div class="t-right-bg"></div>
    </div>
</template>
<script lang='ts'>
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';

type PageType = 'circle' | 'polygon';

export default defineComponent({
    name: 'TPagination',
    props: {
        total: {
            type: Number,
            default: 0,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        pageIndex: {
            type: Number,
            default: 1,
        },
        // 最大页码按钮数
        pagerCount: {
            type: Number,
            default: 7,
        },
        type: {
            type: String as PropType<PageType>,
            default: 'circle',
        },
    },
    emits: ['change', 'update:pageIndex'],
    setup(props, ctx) {
        const pagerLength = computed(() => Math.ceil(props.total / props.pageSize));
        const pagers = computed(() => {
            const pageIndex = props.pageIndex;
            const pagerCount = props.pagerCount < 1 ? 7 : props.pagerCount;
            return Array.from({ length: pagerLength.value })
                .map((_, i) => i + 1)
                .filter(i => {
                    if (pagerLength.value <= pagerCount) return true;
                    const half = Math.floor(pagerCount / 2);
                    const range = i >= pageIndex - half && i <= pageIndex + half;
                    const moreLeft = pageIndex <= pagerCount - half && i <= pagerCount;
                    const moreRight = pageIndex >= pagerLength.value - half && i > pagerLength.value - pagerCount;
                    return range || moreLeft || moreRight;
                });
        });

        // 当前页数变化后
        const handelChange = (index: number) => {
            // 使用 v-model
            ctx.emit('update:pageIndex', index);
            ctx.emit('change', index);
        };

        return {
            pagers,
            handelChange,
            pagerLength,
        };
    },
});
</script>
