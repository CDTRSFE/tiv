/* eslint-disable */
const {stripScript, stripStyle, stripTemplate, compileComponent}  = require('./util');

const startTag = '<!--component-demo:';
const startTagLen = startTag.length;
const endTag = ':component-demo-->';
const endTagLen = endTag.length;

module.exports = function(content) {
    let componentsOpt = '';
    let output = [];
    // demo 组件的 id
    let id = 0;
    // 字符串开始的位置
    let start = 0;

    let commentStart = content.indexOf(startTag);
    let commentEnd = content.indexOf(endTag, commentStart, + startTagLen);

    while (commentStart !== -1 && commentEnd !== -1) {
        output.push(content.slice(start, commentStart));
        const commentContent = content.slice(commentStart + startTagLen, commentEnd);
        const html = stripTemplate(commentContent);
        const script = stripScript(commentContent);
        const componentName = `ComponentDemo${id}`;
        componentsOpt += `${componentName}: ${compileComponent(html, script)},`;
        output.push(`<template v-slot:demo><${componentName} /></template>`);

        id++;
        start = commentEnd + endTagLen;
        commentStart = content.indexOf(startTag, start);
        commentEnd = content.indexOf(endTag, commentStart + startTagLen);
    }
    output.push(content.slice(start));
    return {
        template: output.join(''),
        componentsOpt
    };
}
