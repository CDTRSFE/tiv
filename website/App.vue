<template>
    <div class="main-app">
        <div class="main">
            <Header class="header"></Header>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    name: 'MainApp',
    components: {
        Header,
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
        background: #eee
    }
}
</style>
