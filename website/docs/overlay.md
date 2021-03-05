## 遮罩层

创建遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 基本用法

:::demo 默认点击遮罩层本身或使用 ESC 键可关闭。

```html
<template>
    <button class="demo-btn" @click="visible = true">显示遮罩层</button>
    <t-overlay v-model="visible" append-to-body></t-overlay>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    }
};
</script>
```

:::

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

:::demo

```html
<template>
    <div class="wrap">
        <button class="demo-btn" @click="visible = true">显示遮罩层</button>
        <t-overlay v-model="visible" append-to-body>
            <div class="empty-dialog">
                <t-no-data></t-no-data>
            </div>
        </t-overlay>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>

```

:::

### 模糊背景

打开遮罩层，默认背景是半透明的黑色，可以使用模糊背景效果。

:::demo `blur="#app"` 表示打开遮罩层时，将 `#app` 元素模糊处理。

```html
<template>
    <div class="wrap">
        <button class="demo-btn" @click="visible = true">显示遮罩层</button>
        <t-overlay v-model="visible" append-to-body blur="#app">
            <div class="empty-dialog border-theme">
                <t-no-data></t-no-data>
            </div>
        </t-overlay>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const visible = ref(false);
        return { visible }
    }
};
</script>

```

:::

:::tip

组件没有提供类似 `custom-class` 的属性，对遮罩层有自定义样式需求的，比如修改默认的背景、设置遮罩的层级 (z-index) 等，可以直接在组件上使用 class 或 style 即可，遮罩层是否被插入到 body 元素上都有效。

:::

### 属性

| 参数                  | 说明                                            | 类型    | 可选值       | 默认值 |
| --------------------- | ----------------------------------------------- | ------- | ------------ | ------ |
| model-value / v-model | 是否显示遮罩层                                  | boolean | true / false | false  |
| append-to-body        | 是否将遮罩层插入到 body 元素上                  | boolean | true / false | false  |
| close-on-press-escape | 是否可以使用 ESC 键关闭遮罩层                   | boolean | true / false | true   |
| destroy-on-close      | 是否在关闭后销毁通过 slot 传入的内容            | boolean | true / false | false  |
| lock-scroll           | 是否锁定背景滚动                                | boolean | true / false | true   |
| close-on-click-modal  | 是否可以点击自身关闭遮罩层                      | boolean | true / false | true   |
| blur                  | 作为背景被模糊处理的节点选择器名称，比如 `#app` | string  | -            | -      |

### 事件

| 名称   | 说明                     | 参数             |
| ------ | ------------------------ | ---------------- |
| change | 打开或关闭时触发         | 遮罩层的显示状态 |
| opened | 打开遮罩层动画完成后触发 | -                |
| closed | 关闭遮罩层动画完成后触发 | -                |

