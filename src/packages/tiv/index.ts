import './style.ts';
import type { App } from 'vue';
import ScaleView from '../scale-view';
import Carousel from '../carousel';
import TagSelect from '../tag-select';
import ClickOutside from '../click-outside';

const components = [
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
    ScaleView,
    Carousel,
    TagSelect,
    ClickOutside,
};
