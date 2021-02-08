## 列表滚动

列表自动滚动组件

:::warning
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

:::tip
Input 为受控组件，它总会显示 Vue 绑定值。通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。不支持 v-model 修饰符。
:::

:::demo
```html
<template>
    <t-list-scroll>
        <button @click="increase">+</button>
        <div>{{ n }}</div>
    </t-list-scroll>
</template>
<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const n = ref(0);
            const increase = () => n.value++;
            return { n, increase };
        },
    }
</script>
<style lang="less">
    button {
        color: red;
    }
</style>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small | 是否使用小型分页样式 | boolean | — | false |
| background | 是否为分页按钮添加背景色 | boolean | — | false |
| page-size | 每页显示条目个数，支持 .sync 修饰符 | number | — | 10 |
| total | 总条目数 | number | — | — |
| page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 7 |
| current-page | 当前页数，支持 .sync 修饰符 | number | — | 1 |
| layout | 组件布局，子组件名用逗号分隔| String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total'  |
| page-sizes | 每页显示个数选择器的选项设置 | number[] | — |  [10, 20, 30, 40, 50, 100] |
| popper-class | 每页显示个数选择器的下拉框类名 | string | — | — |
| prev-text | 替代图标显示的上一页文字 | string | — | — |
| next-text | 替代图标显示的下一页文字 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| hide-on-single-page | 只有一页时是否隐藏 | boolean | — | - |
