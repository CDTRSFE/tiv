const path = require('path');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const less = require('rollup-plugin-less');
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
        // css({
        //     output: 'index.css',
        // }),
        vue({
            target: 'browser',
            exposeFilename: false,
            // preprocessStyles: true,
        }),
        less({
            output: `dist/styles/${name === 'tiv' ? 'index' : name}.css`,
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
comNames.forEach(async name => {
    // spinner.info(chalk.blue(`Build ${name}...`));
    const bundle = await rollup.rollup(inputOptions(name));
    await bundle.write({
        dir: `dist/lib/${name}`,
        format: 'es',
    });
    await bundle.close();
    spinner.info(chalk.blue(`${name} done`));
});
