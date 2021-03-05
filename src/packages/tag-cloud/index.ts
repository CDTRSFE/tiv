import { App } from 'vue';
import TagCloud from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

TagCloud.install = (app: App): void => {
    app.component(TagCloud.name, TagCloud);
};

const _TagCloud: SFCWithInstall<typeof TagCloud> = TagCloud;

export default _TagCloud;
