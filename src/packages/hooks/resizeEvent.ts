import { isRef, watch, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import debounce from 'lodash/debounce';
import ResizeObserver from 'resize-observer-polyfill';

type ResizableElement = CustomizedHTMLElement<{
    __resizeListeners__: Array<(...args: unknown[]) => unknown>
    __ro__: ResizeObserver
}>;

const handler = (entries: ResizeObserverEntry[]) => {
    entries.forEach(entry => {
        const target = entry.target as ResizableElement;
        const listeners = target.__resizeListeners__ || [];
        listeners.forEach(fn => fn());
    });
};

const removeListener = (el: ResizableElement, fn: () => void) => {
    el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1);
    if (el.__resizeListeners__.length === 0) {
        el.__ro__.disconnect();
    }
};

export default async(element: HTMLElement | Ref<HTMLElement>, fn: () => void, time = 100) => {
    if (!element) return;

    const cb = debounce(fn, time);
    let el: ResizableElement;
    onUnmounted(() => {
        removeListener(el, cb);
    });
    const handle = () => {
        if (!el.__resizeListeners__) {
            el.__resizeListeners__ = [];
            el.__ro__ = new ResizeObserver(handler);
            el.__ro__.observe(el);
        }
        el.__resizeListeners__.push(cb);
    };

    if (isRef(element)) {
        if (element.value) {
            el = element.value as ResizableElement;
            handle();
            return;
        }
        const unwatch = watch(element, (val) => {
            el = val as ResizableElement;
            unwatch();
            handle();
        });
    } else {
        el = element as ResizableElement;
        handle();
    }
};
