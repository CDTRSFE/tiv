const path = require('path');
// const webpack = require('webpack');
const config = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../packages/'),
        },
    },
};

module.exports = config;
