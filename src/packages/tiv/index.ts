import './style.ts';
import type { App } from 'vue';
import TListScroll from '../list-scroll';
import SelectLabel from '../select-label';
import ScaleView from '../scale-view';
import Carousel from '../carousel';
import TagSelect from '../tag-select';
import ClickOutside from '../click-outside';

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
        app.directive('click-outside', ClickOutside);
    },
};

export {
    TListScroll,
    SelectLabel,
    ScaleView,
    Carousel,
    TagSelect,
    ClickOutside,
};
