import type { ObjectDirective, DirectiveBinding } from 'vue';

type DocumentHandler = (e: MouseEvent) => void;
const nodeList: Map<HTMLElement, DocumentHandler> = new Map();

const clickHandler = (e: MouseEvent) => {
    for (const documentHandler of nodeList.values()) {
        documentHandler(e);
    }
};
document.addEventListener('click', clickHandler, true);

function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding): DocumentHandler {
    return function(e) {
        if (el.contains(e.target as Node)) {
            return false;
        }
        setTimeout(() => {
            binding.value(e);
        }, 0);
    };
}

const clickOutside: ObjectDirective = {
    beforeMount(el, binding) {
        nodeList.set(el, createDocumentHandler(el, binding));
    },
    updated(el, binding) {
        nodeList.set(el, createDocumentHandler(el, binding));
    },
    unmounted(el) {
        nodeList.delete(el);
        if (nodeList.size === 0) {
            document.removeEventListener('click', clickHandler, true);
        }
    },
};

export default clickOutside;
