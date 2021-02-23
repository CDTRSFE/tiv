<template>
    <div class="home-page">
        <readme-doc></readme-doc>
    </div>
</template>

<script>
import ReadmeDoc from '../../README.md';
export default {
    name: 'HomePage',
    components: {
        ReadmeDoc,
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped lang="less">
.home-page {
    width: 900px;
    margin: 60px auto 40px;
    ::v-deep(h1),
    ::v-deep(h2) {
        padding: 0;
        border: 0;
    }
    ::v-deep(.header-anchor) {
        display: none;
    }
    ::v-deep(ul) {
        list-style: circle;
    }
}
</style>
