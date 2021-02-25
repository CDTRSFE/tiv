import { watch } from 'vue';
import type { Ref } from 'vue';

type Target = HTMLElement | Element;
type ModalInstance = {
    rootEl: Target
    overlayEle: Ref<Target>
}

let modals: ModalInstance[] = [];

const blurIn = (el: Target) => {
    el.classList.remove('t-blur-out');
    el.classList.add('t-blur-in');
};
const blurOut = (el: Target) => {
    el.classList.remove('t-blur-in');
    el.classList.add('t-blur-out');
};

export default (modal: ModalInstance, visible: Ref<boolean>) => {
    watch(visible, val => {
        if (val) {
            if (modals.length === 0) {
                blurIn(modal.rootEl);
            } else {
                blurIn(modals[modals.length - 1].overlayEle.value);
            }
            modals.push(modal);
        } else {
            modals = modals.filter(item => item !== modal);
            if (modals.length === 0) {
                blurOut(modal.rootEl);
            } else {
                blurOut(modals[modals.length - 1].overlayEle.value);
            }
        }
    });
};
