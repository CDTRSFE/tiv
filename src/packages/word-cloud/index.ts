import { App } from 'vue';
import WordCloud from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

WordCloud.install = (app: App): void => {
    app.component(WordCloud.name, WordCloud);
};

const _WordCloud: SFCWithInstall<typeof WordCloud> = WordCloud;

export default _WordCloud;
