const fs = require('fs');
const path = require('path');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const less = require('rollup-plugin-less');
// const css = require('rollup-plugin-css-only');
const rollup = require('rollup');

const inputOptions = name => ({
    input: path.resolve(__dirname, `../src/packages/${name}/index.ts`),
    external: ['vue'],
    plugins: [
        nodeResolve(),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false,
                },
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
    ],
});

const outputOptions = name => {
    return [
        {
            dir: `dist/es/${name}`,
            format: 'es',
        },
        {
            dir: `dist/lib/${name}`,
            format: 'cjs',
            exports: 'named',
        },
    ];
};

// const notCom = /tiv/;
const pkgPath = path.resolve(__dirname, '../src/packages');
const pkgNames = [];
fs.readdirSync(pkgPath).forEach(name => {
    // if (notCom.test(name)) return;
    pkgNames.push(name);
});

pkgNames.forEach(async name => {
    const bundle = await rollup.rollup(inputOptions(name));
    const opts = outputOptions(name);
    await bundle.write(opts[0]);
    await bundle.write(opts[1]);
    await bundle.close();
});
