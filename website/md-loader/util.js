const { compileTemplate, TemplateCompiler } = require('@vue/compiler-sfc');

function stripScript(content) {
    const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
    const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripTemplate(content) {
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function pad(source) {
    return source.split(/\r?\n/).map(line => `  ${line}`).join('\n');
}

function compileComponent(source, script) {
    const template = source.replace(/<template>([\s\S]+)<\/template>/g, '$1');
    const compiled = compileTemplate({
        source: `<div>${template}</div>`,
        filename: 'inline-component',
        compiler: TemplateCompiler,
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
        .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`);

    return `(function() {
        ${compiled.code.replace('return function render', 'function render')}
        ${scriptTpl};
        return {
            render,
            ...obj
        }
    })()`;
}

module.exports = {
    stripScript,
    stripStyle,
    stripTemplate,
    compileComponent,
};
