<template>
    <div class="main-app">
        <div class="main">
            <header-com class="header"></header-com>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import HeaderCom from './components/Header';
export default {
    name: 'MainApp',
    components: {
        HeaderCom,
    },
};
</script>

<style lang="less">
@import '~@/styles/common/resources.less';
.main-app {
    height: 100%;
    .header {
        border-bottom: 1px solid @border-color;
    }
    .container {
        flex: 1;
        height: 0;
        overflow: auto;
    }
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .footer {
        background: #eee;
    }
}
</style>
