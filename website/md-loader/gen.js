/* eslint-disable */
const compileComponent  = require('./util');
// const { uid } = require('uid');

const startTag = '<!--component-demo:';
const startTagLen = startTag.length;
const endTag = ':component-demo-->';
const endTagLen = endTag.length;

module.exports = function(content, fileName) {
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
        // todo
        // id 都会从 0 开始，会造成不同 md 文件里的 demo style 名称会相同，所以加了 filename 做区分。
        // id 设置成时间戳或者拿到函数的外层都不行？
        // loader 会调用多次？
        const { component, style } = compileComponent(commentContent, `demo-${fileName}-${id}`);
        componentsOpt += `${componentName}: ${component},`;
        output.push(`<template v-slot:demo><${componentName} /></template>`);
        style && styles.push(style);
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
