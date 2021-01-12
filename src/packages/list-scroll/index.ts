import { App } from 'vue';
import ListScroll from './index.vue';

ListScroll.install = (app: App): void => {
    app.component(ListScroll.name, ListScroll);
};

export default ListScroll;
