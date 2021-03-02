## 索引号

几种不同样式的列表索引序号。

### 基础用法

:::demo

```html
<template>
    <t-index-text v-for="i in num" :key="i" :index="i" type="1" highlight class="text"></t-index-text>
</template>

<script>
export default {
    setup() {
        const num = Array.from({ length: 10 }).map((_, index) => index + 1);
        return { num };
    },
};
</script>

<style scoped lang="less">
.text {
    margin-right: 6px;
}
</style>

```

:::

:::demo 设置 `highlight = true` 表示前三项高亮显示，`checked = true` 表示此项处于选中状态。

```html
<template>
    <div class="wrap bg-data-v-item">
        <t-index-text v-for="i in num" :key="i" :index="i" type="2"></t-index-text>
        <br><br>
        <t-index-text v-for="i in num" :key="i" :index="i" type="2" highlight></t-index-text>
        <br><br>
        <t-index-text v-for="i in num" :key="i" :index="i" type="4" highlight></t-index-text>
        <br><br>
        <t-index-text v-for="i in num" :key="i" :index="i" :checked="i === 1 || i === 5" type="3" highlight></t-index-text>
    </div>
</template>

<script>

export default {
    setup() {
        const num = Array.from({ length: 10 }).map((_, index) => index + 1);
        return { num };
    },
};
</script>

<style scoped lang="less">
.wrap {
    padding: 20px;
}
.wrap span {
    margin-right: 6px;
}
</style>

```

:::

### 属性

| 参数      | 说明                              | 类型    | 可选值        | 默认值 |
| --------- | --------------------------------- | ------- | ------------- | ------ |
| index     | 索引号，必传                      | number  | -             | -      |
| type      | 类型                              | string  | 1 / 2 / 3 / 4 | 1      |
| highlight | 是否高亮前三项                    | boolean | true / false  | false  |
| checked   | 是否处于选中状态，(type = 3 支持) | boolean | true / false  | false  |

