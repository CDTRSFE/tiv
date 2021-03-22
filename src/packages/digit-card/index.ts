import { App } from 'vue';
import DigitCard from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

DigitCard.install = (app: App): void => {
    app.component(DigitCard.name, DigitCard);
};

const _DigitCard: SFCWithInstall<typeof DigitCard> = DigitCard;

export default _DigitCard;
