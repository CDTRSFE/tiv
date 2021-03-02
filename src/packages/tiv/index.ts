import './style.ts';
import type { App } from 'vue';
import ScaleView from '../scale-view';
import Carousel from '../carousel';
import TagSelect from '../tag-select';
import ClickOutside from '../click-outside';
import Pagination from '../pagination';
import NoData from '../no-data';
import Overlay from '../overlay';
import IndexText from '../index-text';

const components = [
    ScaleView,
    Carousel,
    TagSelect,
    Pagination,
    NoData,
    Overlay,
    IndexText,
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
    Pagination,
    NoData,
    Overlay,
    IndexText,
};
