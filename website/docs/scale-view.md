## 可伸缩视图容器

用于大屏布局的容器组件，在可视区域的大小变化时，始终保持设定的宽高比例显示，同时填充整个内容框，类似于 [object-fit: cover;](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)。

大屏中使用了 rem，基准值是根据设计图和容器宽度来计算的，为了方便 px 和 rem 的换算，默认设定 1rem = 100px，计算方法是：

```js
// 基准值 = 容器宽度 / 设计稿宽度 * 进率
baseSize = containerWidth / 1920 * 100;
```

容器父级（组件根元素）有一个默认宽高: `width: 100vw; height: 100vh;`，在组件挂在后，以及浏览器窗口大小变化后会：

1. 设置容器的 width 和 height；
2. 计算基准值，保存到 `window.rem`，并更新根节点 `<html>` 的 `font-size`。

:::warning

如果项目中已经有 rem 适配逻辑，或者同时存在多个 `ScaleView` 组件，设置 `enable-rem` 为 false，避免造成冲突。

:::

### 基础用法

通过 `ratio` 设置容器宽高比例。

:::demo 容器父级的默认宽高已用样式覆盖。
```html
<template>
    <t-scale-view ratio="7:5" class="box bg-yellow">
      <div class="bg-blue h100 center">{{ text }}</div>
    </t-scale-view>
</template>
<script>
import { onMounted, ref, nextTick } from 'vue';
export default {
    setup() {
        const text = ref('');
        onMounted(() => {
            text.value = `<html style="font-size: ${window.rem}px;">`;
        });
        return {
            text,
        };
    },
};
</script>
```
:::

### 自定义基准值计算方法

可以通过  `base-method` 覆盖默认的基准值计算方法。

:::demo

```html
<template>
    <t-scale-view :base-method="containerWidth => containerWidth / 1920 * 10" class="box bg-yellow">
      <div class="bg-blue h100 center">{{ text }}</div>
    </t-scale-view>
</template>
<script>
import { onMounted, ref, nextTick } from 'vue';
export default {
    setup() {
        const text = ref('');
        onMounted(() => {
            text.value = `<html style="font-size: ${window.rem}px;">`;
        });
        return {
            text,
        };
    },
};
</script>
```

:::

### Attribute

| 参数        | 说明                  | 类型                         | 可选值 | 默认值   |
| ----------- | --------------------- | ---------------------------- | ------ | -------- |
| ratio       | 容器的宽高比例        | string                       | -      | '1.75:1' |
| enable-rem  | 是否启用 rem          | boolean                      | -      | true     |
| base-method | 设置 rem 基准值的方法 | Function({ containerWidth }) | -      | -        |

