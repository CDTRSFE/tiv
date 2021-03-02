const fs = require('fs');
const path = require('path');
const { compileTemplate, TemplateCompiler, compileStyle } = require('@vue/compiler-sfc');

function stripScript(content) {
    const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
    const result = content.match(/<(style).*>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripTemplate(content) {
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function pad(source) {
    return source.split(/\r?\n/).map(line => `  ${line}`).join('\n');
}

function compileComponent(commentContent, id) {
    const source = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    const style = stripStyle(commentContent);
    const template = source.replace(/<template>([\s\S]+)<\/template>/g, '$1');
    const compiled = compileTemplate({
        id,
        source: `<div class="${id}">${template}</div>`,
        filename: 'inline-component',
        compiler: TemplateCompiler,
        // 只有 module 模式才支持 scoped，所以 style 的编译也没有用 scoped
        compilerOptions: {
            mode: 'function',
        },
    });
        // eslint-disable-next-line
        compiled.tips.forEach(tip => console.warn(tip));
    if (compiled.errors.length) {
        // eslint-disable-next-line
        console.error(`\n Error compiling template: \n${pad(compiled.source)}\n${compiled.errors.map(err => ` -${err}`).join('\n')} \n`);
    }

    const scriptTpl = (script || 'const obj = {}')
        .trim()
        .replace(/export\s+default/g, 'const obj =')
        .replace(/import (.*) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
        .replace(/import (.*) from '(.*)'/g, (s, s1, s2) => `const ${s1} = require('${s2}')`);

    let styleTpl = '';
    if (style) {
        // 注入 less 资源文件，在 demo 中直接使用 less 变量和混入。
        const lessVar = fs.readFileSync(path.resolve(__dirname, '../../src/styles/common/var.less'), 'utf-8');
        const lessMixin = fs.readFileSync(path.resolve(__dirname, '../../src/styles/common/mixin.less'), 'utf-8');
        // 为了方便，全部作为 less 处理
        styleTpl = compileStyle({
            id,
            source: lessVar + lessMixin + style,
            filename: 'component-style',
            preprocessLang: 'less',
        }).code;
        styleTpl = `.${id} {
            ${styleTpl}
        }`;
    }

    return {
        component: `(function() {
            ${compiled.code.replace('return function render', 'function render')}
            ${scriptTpl};
            return {
                render,
                ...obj
            }
        })()`,
        style: styleTpl,
    };
}

module.exports = compileComponent;
