/* eslint-disable */
const compileComponent  = require('./util');

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
    const styles = [];

    let commentStart = content.indexOf(startTag);
    let commentEnd = content.indexOf(endTag, commentStart, + startTagLen);

    while (commentStart !== -1 && commentEnd !== -1) {
        output.push(content.slice(start, commentStart));
        const commentContent = content.slice(commentStart + startTagLen, commentEnd);
        const componentName = `ComponentDemo${id}`;
        const { component, style } = compileComponent(commentContent, 'data-v-demo-id-' + id);
        componentsOpt += `${componentName}: ${component},`;
        output.push(`<template v-slot:demo><${componentName} /></template>`);
        styles && styles.push(style);
        id++;
        start = commentEnd + endTagLen;
        commentStart = content.indexOf(startTag, start);
        commentEnd = content.indexOf(endTag, commentStart + startTagLen);
    }
    output.push(content.slice(start));
    return {
        template: output.join(''),
        componentsOpt,
        style: styles.join('\n')
    };
}
