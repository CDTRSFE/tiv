import './style.ts';
import type { App } from 'vue';
import TListScroll from '../list-scroll';
import SelectLabel from '../select-label';
import ScaleView from '../scale-view';
import Carousel from '../carousel';
import TagSelect from '../tag-select';

const components = [
    TListScroll,
    SelectLabel,
    ScaleView,
    Carousel,
    TagSelect,
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
    TagSelect,
};
