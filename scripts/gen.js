if (!process.argv[2] || !process.argv[3]) {
    // eslint-disable-next-line
    console.error('Usage: npm run gen <component-name> <chinese name>\n');
    process.exit(1);
}

// 组件名
const name = process.argv[2];
if (!name) {
    // eslint-disable-next-line
    console.error('名称必填\n\n');
    process.exit(1);
}

const fs = require('fs');
const path = require('path');
const fileSave = require('file-save');
const upperCamelCase = require('uppercamelcase');

const upperCaseName = upperCamelCase(name);
const chineseName = process.argv[3] || name;
const resourcePath = path.resolve(__dirname, '../src/packages/' + name);
const stylesPath = path.resolve(__dirname, '../src/styles');
const websitePath = path.resolve(__dirname, '../website');

// todo fs.lstatSync(path).isDirectory()
try {
    fs.statSync(resourcePath).isDirectory();
    // eslint-disable-next-line
    console.error('组件已存在\n\n');
    process.exit(1);
} catch (err) {
    //
}

const files = [
    {
        fileName: resourcePath + '/index.ts',
        content: `import { App } from 'vue';
import ${upperCaseName} from './Index.vue';
import type { SFCWithInstall } from '../utils/types';

${upperCaseName}.install = (app: App): void => {
    app.component(${upperCaseName}.name, ${upperCaseName});
};

const _${upperCaseName}: SFCWithInstall<typeof ${upperCaseName}> = ${upperCaseName};

export default _${upperCaseName};
`,
    },
    {
        fileName: `${resourcePath}/Index.vue`,
        content: `<template>
    <div class="t-${name}">
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'T${upperCaseName}',
    props: {},
    setup() {
        //
    },
});
</script>
`,
    },
    {
        fileName: `${stylesPath}/${name}.less`,
        content: `@import './common/resources.less';
.t-${name} {
    //
}
`,
    },
    //     {
    //         fileName: `${resourcePath}/package.json`,
    //         content: `{
    //     "name": "@tiv/${name}",
    //     "version": "0.0.0",
    //     "main": "dist/index.js",
    //     "license": "MIT",
    //     "peerDependencies": {
    //         "vue": "^3.0.5"
    //     }
    // }`,
    //     },
    {
        fileName: `${websitePath}/docs/${name}.md`,
        content: `## ${chineseName}`,
    },
];

files.forEach(file => {
    fileSave(file.fileName).write(file.content);
});

// 写入 website/nav.config.js
const navConfig = require('../website/nav.config');
const list = navConfig[1].children;
list.push({
    name: upperCaseName + ' ' + chineseName,
    path: '/' + name,
});
fileSave(path.join(__dirname, '../website/nav.config.js'))
    .write(`module.exports = ${JSON.stringify(navConfig, null, 4)}\n`);

// 引入 less 文件
const lessIndexPath = path.join(__dirname, '../src/styles/index.less');
const lessIndexContent = fs.readFileSync(lessIndexPath);
fileSave(lessIndexPath)
    .write(`${lessIndexContent}\n@import './${name}.less';\n`);

// 引入组件
const indexPath = path.join(__dirname, '../src/packages/tiv/index.ts');
const indexContent = fs.readFileSync(indexPath)
    .replace(/(\r?\nconst components)/, `import ${upperCaseName} from '../${name}';\n$1`)
    .replace(/(\r?\nconst components = \[[^\]]+)/, `$1    ${upperCaseName},\n`)
    .replace(/(\r?\nexport {[^}]+)/, `$1    ${upperCaseName},\n`);
fileSave(indexPath).write(indexContent);

// eslint-disable-next-line
console.log('\nDONE!\n');

// const { exec } = require('shelljs');
// exec('npm run build:file');
