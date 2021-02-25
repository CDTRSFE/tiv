import { App } from 'vue';
import Overlay from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

Overlay.install = (app: App): void => {
    app.component(Overlay.name, Overlay);
};

const _Overlay: SFCWithInstall<typeof Overlay> = Overlay;

export default _Overlay;
