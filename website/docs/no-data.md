## 无数据

无数据时占位提示组件。

### 基础用法

显示默认的图标和描述文字。

:::demo

```html
<template>
    <div class="wrap">
        <t-no-data></t-no-data>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.wrap {
    height: 200px;
}
</style>

```

:::

### 自定义图片和描述文字

需要自定义图片时，可以给 `image` 属性传图片 URL，描述文字通过 `description` 设置。

:::demo

```html
<template>
    <div class="wrap">
        <t-no-data :image="emptyImg" description="数据为空"></t-no-data>
    </div>
</template>

<script>
import emptyImg from '*/images/empty-image.png';
export default {
    data() {
        return {
            emptyImg,
        };
    },
};
</script>

<style scoped lang="less">
.wrap {
    height: 200px;
}
</style>

```

:::

### 自定义内容

通过 `slot` 传递任意 html 内容。

:::demo

```html
<template>
    <div class="wrap">
        <t-no-data>
            <p class="text">(X﹏X)</p>
            <p class="text">暂无数据，请稍后重试</p>
        </t-no-data>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.wrap {
    height: 200px;
}
.text {
    margin: 2px 0;
    text-align: center;
    font-size: 16px;
}
</style>

```

:::

### 属性

| 参数        | 说明       | 类型   | 可选值 | 默认值   |
| ----------- | ---------- | ------ | ------ | -------- |
| image       | 占位图 URL | string | -      | -        |
| description | 描述文字   | string | -      | 暂无数据 |

