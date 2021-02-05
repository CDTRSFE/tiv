import { App } from 'vue';
import ScaleView from './ScaleView.vue';
import type { SFCWithInstall } from '../utils/types';

ScaleView.install = (app: App): void => {
    app.component(ScaleView.name, ScaleView);
};

const _ScaleView: SFCWithInstall<typeof ScaleView> = ScaleView;

export default _ScaleView;
