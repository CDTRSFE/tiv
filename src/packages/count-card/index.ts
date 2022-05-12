import { App } from 'vue';
import CountCard from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

CountCard.install = (app: App): void => {
    app.component(CountCard.name, CountCard);
};

const _CountCard: SFCWithInstall<typeof CountCard> = CountCard;

export default _CountCard;
