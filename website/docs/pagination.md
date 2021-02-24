## 分页

大屏分页组件，提供了圆形和多边形两种样式。

### 基础用法

:::demo 默认样式为圆形 (`type="circle"`)，不显示页码，需要注意 `total` 的值不要设置过大，总页数太多会分不清当前是第几页。

```html
<template>
    <div class="wrap bg-data-v">
        <t-pagination
            :page-index="pageIndex"
            :total="50"
            :page-size="10"
            @change="changeHandle"
        ></t-pagination>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const pageIndex = ref(1);
        const changeHandle = (i) => {
            pageIndex.value = i;
        };
        return {
            pageIndex,
            changeHandle,
        };
    },
};
</script>

<style scoped lang="less">
.wrap {
    padding: 30px 0;
}
</style>

```

:::

:::demo `type="polygon"` 使用多边形样式。

```html
<template>
    <div class="wrap bg-data-v">
        <t-pagination
            :page-index="pageIndex"
            :total="200"
            :page-size="10"
            type="polygon"
            @change="changeHandle"
        ></t-pagination>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const pageIndex = ref(1);
        const changeHandle = (i) => {
            pageIndex.value = i;
        };
        return {
            pageIndex,
            changeHandle,
        };
    },
};
</script>

<style scoped lang="less">
.wrap {
    padding: 30px 0;
}
</style>

```

:::

### 设置页码按钮数

默认显示7个页码按钮，可通过 `pager-count` 设置。

:::demo

```html
<template>
    <div class="wrap bg-data-v">
        <t-pagination
            :page-index="pageIndex"
            :total="200"
            :page-size="10"
            :pager-count="5"
            type="polygon"
            @change="changeHandle"
        ></t-pagination>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const pageIndex = ref(1);
        const changeHandle = (i) => {
            pageIndex.value = i;
        };
        return {
            pageIndex,
            changeHandle,
        };
    },
};
</script>

<style scoped lang="less">
.wrap {
    padding: 30px 0;
}
</style>

```

:::

### 属性

| 参数        | 说明                                         | 类型   | 可选值         | 默认值 |
| ----------- | -------------------------------------------- | ------ | -------------- | ------ |
| page-index  | 当前页数，支持 `v-model:page-index` 双向绑定 | number | -              | 1      |
| page-size   | 每页条数                                     | number | -              | 10     |
| total       | 总条数                                       | number | -              | 0      |
| pager-count | 页码按钮数，大于0的奇数                      | number | -              | 7      |
| type        | 样式类型                                     | string | circle/polygon | circle |

### 事件

| 名称   | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| change | pageIndex 改变时触发 | 当前页   |

