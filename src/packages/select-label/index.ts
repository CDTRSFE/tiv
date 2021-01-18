import { App } from 'vue';
import SelectLabel from './SelectLabel.vue';

SelectLabel.install = (app: App): void => {
    app.component(SelectLabel.name, SelectLabel);
};

export default SelectLabel;
