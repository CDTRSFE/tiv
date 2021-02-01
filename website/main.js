import { createApp, nextTick } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
import 'github-markdown-css';
import './styles/hljs.css';
import './styles/common.less';
import Tiv from 'tiv';
import DemoBlock from './components/DemoBlock.vue';
import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.afterEach(() => {
    nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        blocks.forEach(hljs.highlightBlock);
    });
});

const app = createApp(App);
app.component('DemoBlock', DemoBlock);
app.use(router).use(Tiv).mount('#app');
