## 可伸缩视图容器

用于数据可视化页面的容器组件。

### 缩放功能比较

数据可视化页面布局是固定的，为了能在不同尺寸的设备上正常显示，并且窗口大小变化时，始终保持相同的宽高比例，同时填充整个父级容器，需要具备自动缩放能力，实现方式有两种：

1. 样式使用 **rem**，窗口变化后动态计算基准值，再更新根节点的 `font-size`，达到缩放效果。
2. 直接使用 **transform: scale()** 缩放根组件。

此组件使用了第二种方式，因为使用 rem 会存在以下问题：

1. 无法使用第三方 UI 组件，比如 element-ui。
2. canvas, echarts 等需要先换算成 px。
3. 文本的 `font-size` 有最小值，继续缩小会导致布局错位，不方便调试界面。

### 基础用法

通过 `baseSize` 设置容器基础宽高，窗口大小变化时将根据这个值对容器做缩放处理。

:::demo 此例中容器的宽高会在 400*220 px 的基础上做缩放处理，点击上方按钮切换父容器（.wrap）大小，预览不同缩放比例的显示效果。
```html
<template>
    <span>父容器大小：</span>
    <button
        v-for="item in btns"
        :key="item.name"
        :class="{'active': item.height === height}"
        class="demo-btn btn"
        @click="handleChange(item.height)"
    >
        {{ item.name }}
    </button>
    <div :style="{height}" class="bg-data-v wrap">
        <t-scale-view base-size="400*220" class="com">
            <div class="content h100">
                <t-no-data></t-no-data>
            </div>
        </t-scale-view>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const btns = ref([
            {
                name: 'small',
                height: '200px',
            },
            {
                name: 'medium',
                height: '300px',
            },
            {
                name: 'large',
                height: '400px',
            },
        ]);
        const height = ref('200px');
        const handleChange = (v) => {
            height.value = v;
        };

        return {
            btns,
            height,
            handleChange,
        };
    },
};
</script>

<style scoped lang="less">
.wrap {
    width: 850px;
    height: 300px;
    transition: 0.3s;
}
.btn {
    margin-bottom: 20px;
}
.com {
    width: 100%;
    height: 100%;
}
.content {
    background: url('~*/images/data-v-border.png') no-repeat center center / 90% 90%;
}
</style>
```
:::

### 缩放 body

某些组件可能会把节点添加到 body，因为这些节点不再是 `t-scale-wiew`  组件的子节点，所以无法缩放，可设置属性 `scale-body = "true"` 将 body 作为缩放容器解决 。

```html
<template>
    <t-scale-view scale-body>
        <div class="content"></div>
    </t-scale-view>
</template>

<script>
export default {};
</script>

```

### 属性

| 参数       | 说明                                                         | 类型    | 可选值     | 默认值    |
| ---------- | ------------------------------------------------------------ | ------- | ---------- | --------- |
| base-size  | 容器的基础宽高，一般设置成设计图的宽高，格式为 width*height，单位 px | string  | -          | 1920*1080 |
| scale-body | 是否将 body 作为缩放容器。                                   | boolean | true/false | false     |

### 方法

| 名称    | 说明                                                         | 参数 | 返回值 |
| ------- | ------------------------------------------------------------ | ---- | ------ |
| setSize | 手动更新容器样式 (width, height, scale)，父容器宽高变化不是由窗口大小变化引起的情况下，需要调用。 | -    | -      |

