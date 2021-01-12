## 列表滚动

列表自动滚动组件

:::warning
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

:::tip
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

:::demo ListScroll 列表滚动 描述
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
```
:::