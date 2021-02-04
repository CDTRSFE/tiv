import { App } from 'vue';
import SelectLabel from './SelectLabel.vue';
import type { SFCWithInstall } from '../utils/types';

SelectLabel.install = (app: App): void => {
    app.component(SelectLabel.name, SelectLabel);
};

const _SelectLabel: SFCWithInstall<typeof SelectLabel> = SelectLabel;

export default _SelectLabel;
