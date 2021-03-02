const path = require('path');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const vue = require('rollup-plugin-vue');
// const less = require('rollup-plugin-less');
const rollup = require('rollup');
const alias = require('@rollup/plugin-alias');
const ora = require('ora');
const chalk = require('chalk');
const pkg = require('../package.json');
const deps = Object.keys(pkg.dependencies);
const { comNames, pkgNames } = require('./pkg-name');

const spinner = ora(`${chalk.blue('Building...')}`).start();

const inputOptions = name => ({
    input: path.resolve(__dirname, `../src/packages/${name}/index.ts`),
    external(id) {
        // 不打包依赖
        return [...pkgNames, ...deps, 'vue'].some(k => new RegExp('^' + k).test(id));
    },
    plugins: [
        nodeResolve(),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false,
                },
                abortOnError: false,
            },
        }),
        vue({
            css: false,
        }),
        alias({
            // todo 居然不可以使用 @ 作为别名？
            // entries: [
            //     { find: /^~?@/, replacement: path.resolve(__dirname, '../src') },
            // ],
        }),
    ],
});

// 打包单个组件
let index = 0;
const build = async(name) => {
    spinner.info(chalk.blue(`Build ${name}...\n`));
    const bundle = await rollup.rollup(inputOptions(name));
    await bundle.write({
        dir: `dist/lib/${name}`,
        format: 'es',
    });
    await bundle.close();

    if (comNames[index + 1]) {
        build(comNames[++index]);
    } else {
        spinner.info(chalk.blue('Components building completed\n'));
    }
};
build(comNames[index]);
