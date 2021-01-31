<template>
    <div class="header">
        <img class="logo" src="~*/images/tiv-logo.png" alt="" />
        <p class="name">Tiv UI</p>
        <ul class="links">
            <li v-for="item in links" :key="item.path" class="item">
                <a v-if="item.blank" :href="item.path" target="blank">{{ item.name }}</a>
                <router-link v-else :to="item.path">{{ item.name }}</router-link>
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
                {
                    name: 'GitHub',
                    path: 'https://github.com/iamzhaoqing/tiv',
                    blank: true,
                },
            ],
        };
    },
};
</script>

<style scoped lang="less">
.header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    .name {
        font-size: 20px;
        font-weight: 200;
    }
    .logo {
        width: 30px;
        height: 30px;
        margin-right: 10px;
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
    a {
        display: inline-block;
        line-height: 2;
    }
}
.router-link-active {
    font-weight: bold;
}
</style>
