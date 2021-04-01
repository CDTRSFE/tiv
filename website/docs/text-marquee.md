## 文字跑马灯

文字循环轮播效果。

### 基础用法

:::demo

```html
<template>
    <t-text-marquee :data="list" class="text-box"></t-text-marquee>
</template>

<script>
import { ref } from 'vue';

function getRandomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default {
    setup() {
        const textArr = 'We are still working on a dedicated Migration Build of Vue 3 with Vue 2 compatible behavior and runtime warnings of incompatible usage. If you are planning to migrate a non-trivial Vue 2 app, we strongly recommend waiting for the Migration Build for a smoother experience.'.split(' ');
        const list = ref([]);
        list.value = Array.from({ length: 6 }).map(() => {
            const index = getRandomInt(0, textArr.length - 5);
            const weight = getRandomInt(10, 40);
            return {
                text: textArr.slice(index, index + 5).join(' '),
                weight,
            };
        });
        return { list, };
    },
};
</script>

<style lang="less">
.text-box {
    height: 300px;
}
</style>

```

:::

为了能够正常显示，需要给组件设置高度，或者将组件放在有宽高的容器中。

```html
<t-text-marquee style="height: 300px"></t-text-marquee>
```

```html
<div style="height: 300px">
    <t-text-marquee></t-text-marquee>
</div>
```

### 属性

| 参数        | 说明                                           | 类型                    | 可选值       | 默认值 |
| :---------- | :--------------------------------------------- | :---------------------- | :----------- | :----- |
| data        | 需要显示的数据                                 | array[{ text, weight }] | -            | -      |
| step        | 1秒内移动的距离，用来表示轮播动画速度，单位 px | number                  | -            | 60     |
| hover-pause | 是否开启鼠标移入暂停轮播                       | boolean                 | true / false | false  |

### 事件

| 名称  | 说明           | 参数             |
| ----- | -------------- | ---------------- |
| click | 点击文本时触发 | 被点击的文本数据 |

