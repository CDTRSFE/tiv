import { App } from 'vue';
import TListScroll from '@/packages/list-scroll';

const components = [
    TListScroll,
];

export default {
    install: (app: App): void => {
        components.forEach(c => app.component(c.name, c));
    },
};

export {
    TListScroll,
};
