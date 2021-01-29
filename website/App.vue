<template>
    <div class="main-app">
        <div class="main">
            <Header class="header"></Header>
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
import Header from './components/Header';
export default {
    name: 'MainApp',
    components: {
        Header,
        // TSelectLabel2,
    },
};
</script>

<style lang="less">
.main-app {
    height: 100%;
    // min-width: 1320px;
    // color: #333;
    .header {
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
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
        // height: 100px;
        background: #eee;
    }
}
</style>
