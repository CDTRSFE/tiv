const MarkdownIt = require('markdown-it');
const mdContainer = require('markdown-it-container');
const anchorPlugin = require('markdown-it-anchor');
const genComponent = require('./gen');
const overWriteFenceRule = require('./fence');
const slugify = require('transliteration').slugify;

const md = new MarkdownIt();
md.set({ html: true });

// 重写 fence 渲染策略
overWriteFenceRule(md);

// 块级自定义容器插件
// https://github.com/markdown-it/markdown-it-container
md.use(mdContainer, 'demo', {
    validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        // 匹配 :::demo
        if (tokens[idx].nesting === 1) {
            const description = m && m.length > 1 ? m[1] : '';
            // :::demo 块内
            const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
            return `<demo-block>
                ${description ? `${md.render(description)}` : ''}
                <!--component-demo:${content}:component-demo-->
            `;
        }
        // 匹配 :::
        return '</demo-block>';
    },
});
md.use(mdContainer, 'tip');
md.use(mdContainer, 'warning');

// 锚点插件
// https://github.com/valeriangalliat/markdown-it-anchor
md.use(anchorPlugin, {
    level: 2,
    permalink: true,
    permalinkSymbol: '#',
    permalinkBefore: true,
    slugify,
});

module.exports = function(source) {
    const result = md.render(source);
    const { template, componentsOpt } = genComponent(result);
    return `
    <template>
        <div class="markdown-body">${template}</div>
    </template>
    <script lang="ts">
        import * as Vue from 'vue';
        export default {
            name: 'DocContent',
            components: {
                ${componentsOpt}
            }
        }
    </script>
    `;
};
