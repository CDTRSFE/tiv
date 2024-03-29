import type { App } from 'vue';
import ScaleView from '../scale-view';
import Carousel from '../carousel';
import TagSelect from '../tag-select';
import ClickOutside from '../click-outside';
import Pagination from '../pagination';
import NoData from '../no-data';
import Overlay from '../overlay';
import IndexText from '../index-text';
import WordCloud from '../word-cloud';
import TagCloud from '../tag-cloud';
import CountCard from '../count-card';
import TextMarquee from '../text-marquee';
import ImgHotspot from '../img-hotspot';

const components = [
    ScaleView,
    Carousel,
    TagSelect,
    Pagination,
    NoData,
    Overlay,
    IndexText,
    WordCloud,
    TagCloud,
    CountCard,
    TextMarquee,
    ImgHotspot,
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
    WordCloud,
    TagCloud,
    CountCard,
    TextMarquee,
    ImgHotspot,
};
