import { watch } from 'vue';
import type { Ref } from 'vue';

type ModalInstance = {
    handleClose: () => void
}
let modals: ModalInstance[] = [];

export default (modal: ModalInstance, visible: Ref<boolean>) => {
    watch(visible, val => {
        if (val) {
            modals.push(modal);
        } else {
            modals = modals.filter(item => item !== modal);
        }
    });
};

document.addEventListener('keydown', e => {
    if (modals.length === 0) return;
    if (e.code === 'Escape') {
        e.stopPropagation();
        modals[modals.length - 1].handleClose();
    }
});
