<template>
    <div class="header">
        <p class="name">Tiv</p>
        <ul class="links">
            <li v-for="item in links" :key="item.path" class="item">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            links: [
                {
                    name: '首页',
                    path: '/home',
                },
                {
                    name: '组件',
                    path: '/component',
                },
            ],
        };
    },
};
</script>

<style scoped lang="less">
.header {
    display: flex;
    padding: 0 20px;
    .name {
        line-height: 60px;
        font-size: 28px;
    }
}
.links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    height: 100%;
    .item {
        margin: 0 10px;
    }
}
.router-link-active {
    font-weight: bold;
}
</style>
