<template>
    <div class="side-nav">
        <div class="search-box">
            <input v-model="searchKey" type="text" class="search-inp" placeholder="搜索" />
            <span v-show="searchKey !== ''" class="clear-icon" @click="searchKey = ''">×</span>
        </div>
        <ul class="list">
            <li v-for="item in list" :key="item.path" class="item">
                <p
                    :class="{link: !item.children, active: baseUrl + item.path === path}"
                    class="name"
                    @click="toPage(item.path)"
                >
                    {{ item.name }}
                </p>
                <ul v-if="item.children.length" class="sub-nav">
                    <li v-for="v in item.children" :key="v.path">
                        <div
                            :class="{active: baseUrl + v.path === path}"
                            class="sub-name link"
                            @click="toPage(v.path)"
                        >
                            <template v-if="v.resultName">
                                <p v-for="(n, i) in v.resultName" :key="i" class="result-name">
                                    <pre>{{ n }}</pre><pre v-if="i < v.resultName.length - 1" class="result-key">{{ searchKey }}</pre>
                                </p>
                            </template>
                            <span v-else>{{ v.name }}</span>
                        </div>
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
            path: '',
            searchKey: '',
        };
    },
    computed: {
        baseUrl() {
            return this.$route.meta.baseUrl;
        },
        list() {
            const key = this.searchKey;
            return nav.map(item => ({
                ...item,
                children: (item.children || [])
                    .filter(v => key === '' || v.name.includes(key))
                    .map(v => key === '' ? v : {
                        ...v,
                        resultName: v.name.split(key),
                    }),
            }));
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
            this.searchKey = '';
        },
    },
};
</script>

<style scoped lang="less">
@import '~@/styles/common/resources.less';
.side-nav {
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px);
    margin: 20px 0;
}
.search-box {
    position: relative;
    width: calc(100% - 20px);
    margin: 0 10px 10px;
}
.search-inp {
    display: inline-block;
    width: 100%;
    padding: 4px 10px;
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
.clear-icon {
    position: absolute;
    right: 10px;
    top: calc(50% - 14px);
    font-size: 24px;
    line-height: 1;
    color: tint(@theme-color, 20%);
    cursor: pointer;
    &:hover {
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
.result-name {
    display: inline-block;
    pre {
        display: inline-block;
        margin: 0;
    }
}
.result-key {
    color: orange;
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
