const path = require('path');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const less = require('rollup-plugin-less');
const { terser } = require('rollup-plugin-terser');
const pkg = require('../package.json');
const deps = Object.keys(pkg.dependencies);
const { pkgNames } = require('./pkg-name');

module.exports = [
    // 生成 d.ts 文件
    // esm.js 全量包，不包括 vue 和第三方依赖
    {
        input: path.resolve(__dirname, '../src/packages/tiv/index.ts'),
        output: {
            format: 'es',
            file: 'dist/lib/index.esm.js',
        },
        plugins: [
            terser(),
            nodeResolve(),
            typescript({
                tsconfigOverride: {
                    include: [
                        'src/packages/**/*',
                        'typings/vue-shim.d.ts',
                    ],
                    exclude: [
                        'node_modules',
                    ],
                },
                abortOnError: false,
            }),
            vue({
                target: 'browser',
                exposeFilename: false,
            }),
            less({
                output: false,
            }),
        ],
        external(id) {
            return /^vue/.test(id) || deps.some(name => new RegExp('^' + name).test(id));
        },
    },
    // 生成 index.js 入口文件，不包括组件和依赖
    {
        input: path.resolve(__dirname, '../src/packages/tiv/index.ts'),
        output: {
            format: 'cjs',
            file: 'dist/lib/index.js',
            exports: 'named',
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
                target: 'browser',
                exposeFilename: false,
            }),
            less({
                output: false,
            }),
        ],
        external(id) {
            return /^vue/.test(id) ||
                deps.some(k => new RegExp('^' + k).test(id)) ||
                pkgNames.some(name => new RegExp('../' + name).test(id));
        },
    },
    // umd 全量包，包括所有依赖
    {
        input: path.resolve(__dirname, '../src/packages/tiv/index.ts'),
        output: {
            format: 'umd',
            file: 'dist/lib/index.full.js',
            exports: 'named',
            name: 'Tiv',
        },
        plugins: [
            terser(),
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
                target: 'browser',
                exposeFilename: false,
            }),
            less({
                output: 'dist/styles/index.css',
            }),
        ],
    },
    // todo
    // 公共样式
    {
        input: path.resolve(__dirname, '../src/packages/tiv/style.ts'),
        plugins: [
            less({
                output: 'dist/styles/base.css',
            }),
        ],
    },
];
