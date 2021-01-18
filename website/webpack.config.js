const path = require('path');
// const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    mode: isProd ? 'production' : 'development',
    devtool: !isProd && 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, './main.js'),
    output: {
        path: path.resolve(__dirname, '../website/dist'),
        publicPath: '/',
        filename: isProd ? '[name].[hash].js' : '[name].js',
    },
    stats: 'verbose',
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     loader: 'ts-loader',
            //     options: {
            //         appendTsSuffixTo: [/\.vue$/],
            //     },
            //     exclude: /node_modules/,
            // },
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
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false,
                            },
                        },
                    },
                    {
                        loader: path.resolve(__dirname, './md-loader/index.js'),
                    },
                ],
            },
            {
                test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        inline: true,
        port: '8089',
        hot: true,
        stats: 'minimal',
        publicPath: '/',
        contentBase: __dirname,
        overlay: true,
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        alias: {
            'vue': 'vue/dist/vue.esm-browser.js',
            tiv: path.resolve(__dirname, '../src/packages/tiv'),
            '@': path.resolve(__dirname, '../src'),
            '*': path.resolve(__dirname, '../website'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './website/index.html',
            // filename: './index.html',
        }),
    ],
};

// if (!isProd) {
//     config.devtool = 'cheap-module-eval-source-map';
// }
config.plugins.push(
    new MiniCssExtractPlugin(),
);

module.exports = config;
