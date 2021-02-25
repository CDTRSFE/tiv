import { camelize, isObject } from '@vue/shared';

export const getStyle = (el: HTMLElement, styleName: string): string => {
    if (!el || !styleName) return null;
    // styleName 使用短横线和驼峰名称都可以 (https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle#%E6%B3%A8%E6%84%8F)
    // styleName = camelize(styleName);

    // 没必要通过 document.defaultView 来调用 getComputedStyle
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle#defaultview
    return window.getComputedStyle(el)[styleName];
};

export const setStyle = (el: HTMLElement, styleName: string, value?: string) => {
    /* https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style#%E4%BE%8B%E5%AD%90
    * // 在单个语句中设置多个样式
    * elt.style.cssText = "color: blue; border: 1px solid black";
    * // 或者
    * elt.setAttribute("style", "color:red; border: 1px solid blue;");
    * // 设置特定样式，同时保持其他内联样式值不变
    * elt.style.color = "blue";
    */
    if (!el || styleName) return;
    if (isObject(styleName)) {
        Object.keys(styleName).forEach(prop => {
            setStyle(el, prop, styleName[prop]);
        });
    } else {
        styleName = camelize(styleName);
        el.style[styleName] = value;
    }
};
