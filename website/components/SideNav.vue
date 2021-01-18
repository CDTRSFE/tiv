<template>
    <div class="side-nav">
        <ul class="list">
            <li v-for="item in list" :key="item.path" class="item">
                <p
                    :class="{link: !item.children, active: baseUrl + item.path === path}"
                    class="name"
                    @click="toPage(item.path)"
                >
                    {{ item.name }}
                </p>
                <ul v-if="item.children" class="sub-nav">
                    <li v-for="v in item.children" :key="v.path">
                        <p
                            :class="{active: baseUrl + v.path === path}"
                            class="sub-name link"
                            @click="toPage(v.path)"
                        >
                            {{ v.name }}
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import nav from '../nav.config';

export default {
    name: 'SideNav',
    data() {
        return {
            list: nav,
            path: '',
        };
    },
    computed: {
        baseUrl() {
            return this.$route.meta.baseUrl;
        },
    },
    created() {
        this.path = this.$route.path;
    },
    methods: {
        toPage(p) {
            const path = this.baseUrl + p;
            if (this.path === path) return;
            this.path = path;
            this.$router.push({
                path,
            });
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.side-nav {
    margin: 10px 0;
}
.name,
.sub-name {
    padding: 0 20px;
    line-height: 42px;
}
.item .name {
    font-weight: bold;
}
.sub-nav {
    // padding-left: 6px;
    color: #444;
    font-size: 14px;
}
.sub-nav .sub-name {
    padding-left: 26px;
}
.link {
    &:hover {
        color: @link-color;
        cursor: pointer;
    }
    &.active {
        position: relative;
        color: @link-color;
        background: #f0faff;
    }
    // &.active::after {
    //     display: inline-block;
    //     position: absolute;
    //     content: '';
    //     right: 0;
    //     top: 0;
    //     width: 2px;
    //     height: 100%;
    //     background: @theme-color;
    // }
}
</style>
