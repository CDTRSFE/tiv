## 轮播

平滑无限轮播，支持鼠标移入暂停，需要显示的内容通过 slot 传入。

### 基础用法

:::demo 默认向左轮播，通过 `hover-pause` 属性开启鼠标移入暂停。
```html
<template>
    <t-carousel hover-pause class="margin">
        <ul class="list">
            <li v-for="(item, index) in data" :key="index" class="item center color-blue bg-blue">{{ index + 1 }}      </li>
        </ul>
    </t-carousel>
    <t-carousel direction="right">
        <ul class="list">
            <li v-for="(item, index) in data" :key="index" class="item center color-blue bg-blue">{{ index + 1 }}      </li>
        </ul>
    </t-carousel>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const data = ref(Array.from({ length: 15 }));
        return { data };
    },
};
</script>

<style lang="less">
.margin {
    margin-bottom: 20px;
}
.list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}
.item {
    width: 200px;
    height: 80px;
    padding: 0;
    margin: 0;
    margin-right: 20px;
}
</style>
```
:::

### 竖直轮播

上下轮播需要限制组件的高度，防止被撑开。

:::demo

```html
<template>
    <div class="wrap">
        <t-carousel direction="down" class="com margin">
            <ul class="list">
                <li v-for="(item, index) in data" :key="index" class="item center bg-blue color-blue">{{ index + 1 }}</li>
            </ul>
        </t-carousel>
        <t-carousel direction="up" class="com">
            <ul class="list">
                <li v-for="(item, index) in data" :key="index" class="item center bg-blue color-blue">{{ index + 1 }}</li>
            </ul>
        </t-carousel>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const data = ref(Array.from({ length: 15 }));
        return { data };
    },
};
</script>

<style lang="less">
.wrap {
    display: flex;
}
.com {
    width: calc(50% - 10px);
    height: 300px;
}
.margin {
    margin-right: 20px;
}
.list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
.item {
    height: 80px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
}
</style>
```

:::

### 文字轮播

不限制 slot 的内容，可以是普通文本。

:::demo 宽度超出才会触发轮播，此例中 `white-space: nowrap;` 样式确保文字不换行。
```html
<template>
    <div class="wrap">
        <t-carousel :step="40" :delay="1000" class="com">
            <p class="text">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
        </t-carousel>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.wrap {
    background: #fffbe8;
}
.com {
    margin: 0 20px;
}
.text {
    padding: 14px 30px 14px 0;
    margin: 0;
    color: #ed6a0c;
    white-space: nowrap;
}
</style>
```
:::

### 属性

| 参数        | 说明                                           | 类型    | 可选值             | 默认值 |
| ----------- | ---------------------------------------------- | ------- | ------------------ | ------ |
| direction   | 轮播方向                                       | string  | left/right/up/down | left   |
| step        | 1秒内移动的距离，用来表示轮播动画速度，单位 px | number  | -                  | 60     |
| delay       | 渲染后延迟轮播的时间，单位 ms                  | number  | -                  | 0      |
| hover-pause | 是否开启鼠标移入暂停轮播                       | boolean | true/false         | false  |

### 方法

| 名称  | 说明     | 参数 | 返回值 |
| ----- | -------- | ---- | ------ |
| pause | 暂停轮播 | -    | -      |
| run   | 继续轮播 | -    | -      |

