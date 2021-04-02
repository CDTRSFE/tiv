## 标签云

3D 滚动标签云，基于 [TagCloud.js](https://github.com/mcc108/TagCloud#optionskeep)。

### 基础用法

:::demo

```html
<template>
	<t-tag-cloud :data="list" @click-tag="fn"></t-tag-cloud>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'
            .split(/[,\s]/g));
        const fn = (text) => {
            console.log(text);
        };
        return { list, fn };
    },
};
</script>

```

:::

### 修改配置

通过 `option` 属性可以修改默认配置，传入的值将和默认值合并。

Tag 文字的颜色可通过 `colors` 属性设置，其他样式可通过 CSS 设置，每一个 Tag 默认都有一个 `.tag-cloud-item` 的类名，也可以通过 `option.itemClass` 自定义。

:::demo

```html
<template>
	<t-tag-cloud :data="list" :option="option" :colors="colors" class="tags"></t-tag-cloud>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'
            .split(/[,\s]/g));
        const colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];
        const option = ref({
            direction: 135,
            radius: 200,
            maxSpeed: 'fast'
        });
        return { colors, list, option };
    },
};
</script>

<style lang="less">
.tags {
    background: #071132 url(*/images/tag-cloud-bg.png) no-repeat center center / 100%;
}
.tags .tag-cloud-item {
    font-size: 28px;
    cursor: pointer;
}
</style>

```

:::

### 默认配置

详细配置说明见 [https://github.com/mcc108/TagCloud#options](https://github.com/mcc108/TagCloud#options)

```js
{
    // 滚动半径
    radius: 140,
    // 滚动速度(slow/normal/fast)
    maxSpeed: 'normal',
    initSpeed: 'normal',
    // 滚动方向(角度)
    direction: 45,
    keep: false,
    containerClass: 'tag-cloud-container',
    itemClass: 'tag-cloud-item',
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
}
```

### 属性

| 参数   | 说明                | 类型     | 可选值 | 默认值 |
| :----- | :------------------ | :------- | :----- | :----- |
| option | 配置                | object   | -      | -      |
| colors | Tag 文字颜色        | boolean  | -      | -      |
| data   | 需要显示的 Tag 文本 | string[] | -      | -      |

### 事件

| 名称             | 说明                    | 参数                                                         |
| ---------------- | ----------------------- | ------------------------------------------------------------ |
| instance-created | TagCloud 实例创建后触发 | [TagCloud 实例](https://github.com/mcc108/TagCloud#instance) |
| click-tag        | 鼠标点击 Tag 后触发     | 被点击 Tag 的文本                                            |

