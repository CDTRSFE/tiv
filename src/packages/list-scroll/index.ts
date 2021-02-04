import { App } from 'vue';
import ListScroll from './index.vue';
import type { SFCWithInstall } from '../utils/types';

ListScroll.install = (app: App): void => {
    app.component(ListScroll.name, ListScroll);
};

const _ListScroll: SFCWithInstall<typeof ListScroll> = ListScroll;

export default _ListScroll;
