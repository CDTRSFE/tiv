<template>
    <div class="component-doc">
        <div class="aside">
            <side-nav></side-nav>
        </div>
        <div class="docs">
            <div class="wrap">
                <div ref="docContent" class="docs-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from './SideNav';

export default {
    name: 'ComponentDoc',
    components: {
        SideNav,
    },
    beforeRouteUpdate() {
        this.resetAnchorHref();
        this.scrollToAnchor();
    },
    mounted() {
        this.resetAnchorHref();
        this.scrollToAnchor();
    },
    methods: {
        resetAnchorHref() {
            const anchors = this.$refs.docContent.querySelectorAll('h2 a, h3 a, h4 a, h5 a');
            anchors.forEach(a => {
                const href = a.getAttribute('href');
                a.href = location.href.split('#').slice(0, 2).join('#') + href;
            });
            this.$refs.docContent.parentNode.scrollTop = 0;
        },
        scrollToAnchor() {
            setTimeout(() => {
                const hash = this.$route.hash.match(/#([^#]+)$/);
                if (!hash) return;
                const elm = document.querySelector(hash[0]);
                if (!elm) return;
                elm.scrollIntoView({
                    behavior: 'smooth',
                });
            }, 100);
        },
    },
};
</script>

<style scoped lang="less">
@import '~@/styles/resources.less';
.component-doc {
    display: flex;
    height: 100%;
    .aside {
        flex-shrink: 0;
        width: 260px;
        border-right: 1px solid @border-color;
    }
    .docs {
        flex: 1;
        position: relative;
    }
    .docs .wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
    }
    .docs-content {
        max-width: 900px;
        margin: 30px auto 50px;
    }
}
</style>
