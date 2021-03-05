import { createApp } from 'vue';
import '*/styles/common.less';
import Tiv from 'tiv';
import '@/styles/index.less';
import App from '*/view/Index.vue';

createApp(App).use(Tiv).mount('#app');
