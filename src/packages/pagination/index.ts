import { App } from 'vue';
import Pagination from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

Pagination.install = (app: App): void => {
    app.component(Pagination.name, Pagination);
};

const _Pagination: SFCWithInstall<typeof Pagination> = Pagination;

export default _Pagination;
