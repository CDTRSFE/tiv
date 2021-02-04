const path = require('path');
const less = require('rollup-plugin-less');

// todo
// 公共样式
module.exports = [
    {
        input: path.resolve(__dirname, '../src/packages/tiv/style.ts'),
        plugins: [
            less({
                output: 'dist/styles/base.css',
            }),
        ],
    },
];
