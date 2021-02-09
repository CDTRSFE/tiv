import { App } from 'vue';
import Carousel from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

Carousel.install = (app: App): void => {
    app.component(Carousel.name, Carousel);
};

const _Carousel: SFCWithInstall<typeof Carousel> = Carousel;

export default _Carousel;
