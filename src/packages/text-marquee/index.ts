import { App } from 'vue';
import TextMarquee from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

TextMarquee.install = (app: App): void => {
    app.component(TextMarquee.name, TextMarquee);
};

const _TextMarquee: SFCWithInstall<typeof TextMarquee> = TextMarquee;

export default _TextMarquee;
