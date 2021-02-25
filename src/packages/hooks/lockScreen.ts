import { watch } from 'vue';
import type { Ref } from 'vue';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default (targetElement: HTMLElement, trigger: Ref<boolean>) => {
    watch(trigger, val => {
        if (val) {
            disableBodyScroll(targetElement, {
                reserveScrollBarGap: true,
            });
        } else {
            enableBodyScroll(targetElement);
        }
    });
};
