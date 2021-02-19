import type { ObjectDirective, DirectiveBinding } from 'vue';

type DocumentHandler = (e: MouseEvent) => void;
const nodeList: Map<HTMLElement, DocumentHandler> = new Map();

const clickHandler = (e: MouseEvent) => {
    for (const documentHandler of nodeList.values()) {
        documentHandler(e);
    }
};
// 使用事件捕获，外部元素可能用了 @click.stop 阻止冒泡
document.addEventListener('click', clickHandler, true);

function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding): DocumentHandler {
    return function(e) {
        if (el.contains(e.target as Node)) {
            return false;
        }
        // 此回调处于事件捕获阶段，执行先于外部元素的点击事件
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
