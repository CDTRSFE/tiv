import '../../styles/base.less';
import { App } from 'vue';
import TListScroll from '../list-scroll/index';
import SelectLabel from '../select-label/index';

const components = [
    TListScroll,
    SelectLabel,
];

export default {
    install: (app: App): void => {
        components.forEach(c => app.component(c.name, c));
    },
};

export {
    TListScroll,
    SelectLabel,
};
