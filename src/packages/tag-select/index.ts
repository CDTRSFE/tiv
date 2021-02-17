import { App } from 'vue';
import TagSelect from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

TagSelect.install = (app: App): void => {
    app.component(TagSelect.name, TagSelect);
};

const _TagSelect: SFCWithInstall<typeof TagSelect> = TagSelect;

export default _TagSelect;
