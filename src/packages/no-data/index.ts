import { App } from 'vue';
import NoData from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

NoData.install = (app: App): void => {
    app.component(NoData.name, NoData);
};

const _NoData: SFCWithInstall<typeof NoData> = NoData;

export default _NoData;
