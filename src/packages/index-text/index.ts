import { App } from 'vue';
import IndexText from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

IndexText.install = (app: App): void => {
    app.component(IndexText.name, IndexText);
};

const _IndexText: SFCWithInstall<typeof IndexText> = IndexText;

export default _IndexText;
