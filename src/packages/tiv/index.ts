import './style.ts';
import type { App } from 'vue';
import TListScroll from '../list-scroll';
import SelectLabel from '../select-label';
import ScaleView from '../scale-view';
import Carousel from '../carousel';

const components = [
    TListScroll,
    SelectLabel,
    ScaleView,
    Carousel,
];

export default {
    install: (app: App): void => {
        components.forEach(c => app.component(c.name, c));
    },
};

export {
    TListScroll,
    SelectLabel,
    ScaleView,
    Carousel,
};
