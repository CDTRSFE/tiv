<template>
    <div class="change-log">
        <log-list></log-list>
    </div>
</template>

<script>
import LogList from '../../CHANGELOG.md';

export default {
    name: 'LogCom',
    components: {
        LogList,
    },
};
</script>

<style scoped lang="less">
.change-log {
    width: 900px;
    padding: 10px 0 40px;
    margin: 0 auto;
    &::v-deep(.header-anchor) {
        display: none;
    }
}
</style>
