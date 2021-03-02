import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import 'github-markdown-css';
import './styles/hljs.css';
import './styles/common.less';
import '@/styles/index.less';
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

const app = createApp(App);
app.component('DemoBlock', DemoBlock);
app.use(router).use(Tiv).mount('#app');
