import { App } from 'vue';
import ImgHotspot from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

ImgHotspot.install = (app: App): void => {
    app.component(ImgHotspot.name, ImgHotspot);
};

const _ImgHotspot: SFCWithInstall<typeof ImgHotspot> = ImgHotspot;

export default _ImgHotspot;
