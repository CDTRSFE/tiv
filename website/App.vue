<template>
    <div class="main-app">
        <div class="main">
            <header-com class="header"></header-com>
            <!-- <t-select-label2>333</t-select-label2> -->
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
// import TSelectLabel2 from '../dist/es/select-label';
import HeaderCom from './components/Header';
export default {
    name: 'MainApp',
    components: {
        HeaderCom,
        // TSelectLabel2,
    },
};
</script>

<style lang="less">
@import '~@/styles/var.less';
.main-app {
    height: 100%;
    .header {
        border-bottom: 1px solid @border-color;
    }
    .container {
        flex: 1;
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
