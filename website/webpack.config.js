const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';
const isView = process.env.VIEW_ENV === 'true';

const layoutLoaders = [
    'style-loader',
    {
        loader: MiniCssExtractPlugin.loader,
        // https://github.com/vuejs/vue-loader/issues/1742
        options: {
            esModule: false,
        },
    },
    'css-loader',
    'less-loader',
];
if (!isProd) {
    layoutLoaders.splice(1, 1);
}

const config = {
    mode: isProd ? 'production' : 'development',
    devtool: !isProd && 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, isView ? './view.js' : './main.js'),
    output: {
        path: path.resolve(__dirname, '../website/dist'),
        publicPath: isProd ? '/tiv/' : '/',
        filename: isProd ? '[name].[hash].js' : '[name].js',
    },
    // 发生错误或有新编译时输出统计信息
    stats: 'minimal',
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
                use: layoutLoaders,
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
        port: isView ? '8088' : '8089',
        hot: true,
        stats: 'minimal',
        publicPath: '/',
        contentBase: __dirname,
        overlay: true,
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        alias: {
            vue: 'vue/dist/vue.esm-browser.js',
            tiv: path.resolve(__dirname, '../src/packages/tiv'),
            '@': path.resolve(__dirname, '../src'),
            '*': path.resolve(__dirname, '../website'),
        },
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css',
        //     chunkFilename: '[id].[contenthash].css',
        // }),
        new HtmlWebpackPlugin({
            template: './website/index.html',
            favicon: path.resolve(__dirname, './images/tiv-logo.png'),
            // filename: './index.html',
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        }),
    ],
};

if (isProd) {
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    );
}

// if (process.env.ANALYZER !== 'false') {
//     config.plugins.push(
//         new BundleAnalyzerPlugin(),
//     );
// }

module.exports = config;
