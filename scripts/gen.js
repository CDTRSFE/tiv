if (!process.argv[2] || !process.argv[3]) {
    console.error('Usage: npm run gen <name> <chinese name>\n');
    process.exit(1);
}

// 组件名
const name = process.argv[2];
if (!name) {
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
const websitePath = path.resolve(__dirname, '../website');

// todo
try {
    fs.statSync(resourcePath).isDirectory();
    console.error('组件已存在\n\n');
    process.exit(1);
} catch (err) {
    //
}

const files = [
    {
        fileName: resourcePath + '/index.ts',
        content: `import { App } from 'vue';
import ${upperCaseName} from './${upperCaseName}.vue';

${upperCaseName}.install = (app: App): void => {
    app.component(${upperCaseName}.name, ${upperCaseName});
};

export default ${upperCaseName};
`,
    },
    {
        fileName: `${resourcePath}/${upperCaseName}.vue`,
        content: `<template>
    <div class="${name}">
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'T${upperCaseName}',
    props: {},
    setup(props) {
        //
    },
});
</script>
<style lang="less" scoped>
</style>
`,
    },
    {
        fileName: `${resourcePath}/package.json`,
        content: `{
    "name": "@tiv/${name}",
    "version": "0.0.0",
    "main": "dist/index.js",
    "license": "MIT",
    "peerDependencies": {
        "vue": "^3.0.5"
    }
}`,
    },
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
    name: chineseName,
    path: '/' + name,
});
fileSave(path.join(__dirname, '../website/nav.config.js'))
    .write(`module.exports = ${JSON.stringify(navConfig, null, 4)}\n`);

console.log('\nDONE!\n');

// const { exec } = require('shelljs');
// exec('npm run build:file');
