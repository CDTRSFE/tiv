const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// const webpack = require('webpack');
const entryPath = name => path.resolve(__dirname, '../src/packages/' + name);
const config = {
    mode: 'development',
    entry: {
        'list-scroll': entryPath('list-scroll'),
        'select-label': entryPath('select-label'),
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name]/index.js',
        library: 'tiv',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                use: 'vue-loader',
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.(less|css)$/,
                use: ['css-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../packages/'),
        },
    },
    externals: ['vue'],
    target: 'es6',
    plugins: [
        new VueLoaderPlugin(),
    ],
};

module.exports = config;
