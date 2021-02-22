<template>
    <div :class="'type-' + type" class="t-pagination">
        <div class="left-bg"></div>
        <div class="page">
            <div v-if="pageIndex === 1" class="prev disabled"></div>
            <div v-else class="prev" @click="handelChange(pageIndex - 1)"></div>
            <div class="space"></div>
            <div class="space"></div>
            <ul class="pagers">
                <template v-for="p in pagers" :key="p">
                    <li :class="{active: pageIndex === p}" class="item" @click="handelChange(p)">
                        <p class="text">{{ p }}</p>
                    </li>
                    <li class="space"></li>
                </template>
            </ul>
            <div class="space"></div>
            <div v-if="pageIndex === pagerLength" class="next disabled"></div>
            <div v-else class="next" @click="handelChange(pageIndex + 1)"></div>
        </div>
        <div class="right-bg"></div>
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
<style lang="less" scoped>
@import '../../styles/resources.less';
.bg(@name) {
    background-image: url('./images/@{name}.png');
}
.com-height {
    height: 0.32rem;
}
.t-pagination {
    .t-bsb;
    .t-flex;
    .com-height;
    .page {
        .t-flex;
        flex-shrink: 0;
    }
    .pagers {
        .com-height;
        .t-flex;
        .t-lsn;
        .t-usn;
    }
    .item {
        .com-height;
        .t-m0;
        width: 0.43rem;
        background: no-repeat center center / 100% 100%;
        cursor: pointer;
    }
    .text {
        display: none;
    }
    .disabled {
        cursor: not-allowed;
    }
}
.left-bg,
.right-bg {
    flex: 1;
    height: 0.256rem;
    background: no-repeat left center / auto;
    transform: rotate(180deg);
}
.right-bg {
    transform: rotate(0);
}
.prev,
.next {
    .com-height;
    flex: 1;
    width: 0.64rem;
    background: no-repeat center center / auto;
    cursor: pointer;
}
.next {
    transform: rotate(180deg);
}
.type-circle {
    .left-bg,
    .right-bg {
        .bg('circle-left-bg');
    }
    .prev,
    .next {
        .bg('circle-prev');
        &:not(.disabled):hover {
            .bg('circle-prev-active');
        }
    }
    .item {
        .bg('circle-pager');
    }
    .active {
        .bg('circle-pager-active');
    }
    .space {
        .com-height;
        .t-m0;
        width: 0.1rem;
        background: repeat-x center center / 100% 100%;
        .bg('circle-space');
    }
}
.type-polygon {
    .left-bg,
    .right-bg {
        .bg('polygon-left-bg');
    }
    .prev,
    .next {
        .bg('polygon-prev');
        width: 0.38rem;
        background-size: auto 100%;
        &:not(.disabled):hover {
            .bg('polygon-prev-active');
        }
    }
    .item {
        .t-flex;
        width: 0.38rem;
        margin: 0 0.04rem;
        font-size: 0.16rem;
        color: desaturate(@dv-theme-color, 40%);
        .bg('polygon-pager');
        &:hover {
            color: @dv-theme-color;
        }
    }
    .active {
        .bg('polygon-pager-active');
        color: @dv-theme-color;
    }
    .text {
        display: block;
    }
}
</style>
