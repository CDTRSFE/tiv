## 文字跑马灯

文字循环轮播效果。

### 基础用法

`data` 中的 `text`字段表示需要显示的文本， `weight` 字段表示权重，值越大字号越大，可以通过  `max-font-size` 属性设置最大字号，默认字号范围是 (14 ~ 30)px。 `step` 属性用来控制轮播速度。 

:::demo 此例中没有设置文本颜色 (color 属性)，每一条的颜色都是随机的。

```html
<template>
    <t-text-marquee :data="list" :step="150" class="text-box"></t-text-marquee>
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
        list.value = Array.from({ length: 20 }).map(() => {
            const index = getRandomInt(0, textArr.length - 5);
            const weight = getRandomInt(10, 40);
            return {
                text: textArr.slice(index, index + 5).join(' '),
                weight,
            };
        });
        return { list };
    },
};
</script>

<style lang="less">
.text-box {
    height: 200px;
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

| 参数          | 说明                                           | 类型                    | 可选值       | 默认值 |
| :------------ | :--------------------------------------------- | :---------------------- | :----------- | :----- |
| data          | 需要显示的数据                                 | array[{ text, weight }] | -            | -      |
| step          | 1秒内移动的距离，用来表示轮播动画速度，单位 px | number                  | -            | 60     |
| hover-pause   | 是否开启鼠标移入暂停轮播                       | boolean                 | true / false | false  |
| colors        | 文本的颜色列表                                 | array                   | -            | 随机   |
| max-font-size | 文本字体最大值，单位 px                        | number                  | -            | 30     |

### 事件

| 名称  | 说明           | 参数             |
| ----- | -------------- | ---------------- |
| click | 点击文本时触发 | 被点击的文本数据 |

