module.exports = {
    extends: '@trscd/stylelint-config-tpconfig',
    ignoreFiles: ['node_modules', 'dist/**/*', 'website/dist/**/*', 'website/styles/hljs.css'],
    rules: {
        // 忽略 ::v-deep
        'selector-pseudo-element-no-unknown': [true, {
            ignorePseudoElements: ['v-deep'],
        }],
        'declaration-empty-line-before': 'never',
    },
};
