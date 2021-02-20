<template>
    <div class="side-nav">
        <input v-model="searchKey" type="text" class="search-inp" placeholder="搜索" />
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
            searchKey: '',
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
            if (!p) return;
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
@import '~@/styles/resources.less';
.side-nav {
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px);
    margin: 20px 0;
}
.search-inp {
    display: inline-block;
    width: calc(100% - 20px);
    padding: 4px 10px;
    margin: 0 10px 10px;
    line-height: 29px;
    color: @theme-color;
    // border: 1px solid tint(@link-color, 70%);
    border: none;
    background-color: @theme-bg;
    border-radius: 3px;
    outline: none;
    box-sizing: border-box;
    &::placeholder {
        color: @theme-color;
    }
}
.list {
    flex: 1;
    height: 0;
    overflow: auto;
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
    color: @text-color;
    font-size: 14px;
}
.sub-nav .sub-name {
    // padding-left: 26px;
}
.link {
    &:hover {
        color: @link-color;
        cursor: pointer;
    }
    &.active {
        position: relative;
        color: @link-color;
        font-weight: 500;
    }
}
</style>
