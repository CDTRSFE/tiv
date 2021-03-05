## 字符云

基于 [echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud) 的字符云。

### 基础用法

数据通过 `option` 的 `data` 字段传入。默认情况下绑定了 `resize` 事件，窗口大小改变会调用 [echartsInstance.resize](https://echarts.apache.org/zh/api.html#echartsInstance.resize) 方法，设置属性 `:bind-resize="false"` 则不绑定。

:::demo

```vue
<template>
    <div class="wrap">
        <t-word-cloud :option="option" @chart-created="cb"></t-word-cloud>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const option = ref({
            data: 'Vue (pronounced /vjuː/ like view) is a progressive framework for building user interfaces'
            .split(' ')
            .map(word => {
                return {
                    name: word,
                    value: Math.random(),
                };
            })
        });
        const cb = (chart) => {
            // chart.on('click', (e) => {
            //     console.log(e.data);
            // });
        };
        return { option, cb };
    },
};
</script>

<style scoped lang="less">
.wrap {
    height: 300px;
}
</style>

```

:::

### 修改配置

通过 `option` 属性可以修改默认配置，传入的值将和默认值 [深度 merge](https://lodash.com/docs/4.17.15#merge)。

:::demo 此例中修改了文本的样式。

```html
<template>
    <div class="wrap">
        <t-word-cloud :option="option"></t-word-cloud>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const list = 'progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'
            .split(',')
            .map(item => {
                return {
                    name: item,
                    value: Math.random(),
                };
            });
        const colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];
        const option = ref({
            sizeRange: [12, 30],
            rotationRange: [0, 0],
            gridSize: 30,
            textStyle: {
                color() {
                    return colors[Math.floor(Math.random() * colors.length)];
                },
            },
            data: list,
        });
        return { option };
    },
};
</script>

<style scoped lang="less">
.wrap {
    height: 300px;
}
</style>

```

:::

### 默认配置

详细配置说明见 [https://github.com/ecomfe/echarts-wordcloud#usage](https://github.com/ecomfe/echarts-wordcloud#usage)。

```js
{
    type: 'wordCloud',
    shape: 'circle',
    left: 'center',
    top: 'center',
    width: '70%',
    height: '80%',
    right: null,
    bottom: null,
    sizeRange: [12, 60],
    rotationRange: [-90, 90],
    rotationStep: 45,
    gridSize: 8,
    drawOutOfBound: false,
    layoutAnimation: true,
    textStyle: {
        color: function() {
            return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
            ].join(',') + ')';
        },
    },
    emphasis: {
        textStyle: {
            textShadowBlur: '10px',
            textShadowColor: '#333',
        },
    },
    data: [],
}
```

### 属性

| 参数        | 说明                 | 类型    | 可选值       | 默认值 |
| ----------- | -------------------- | ------- | ------------ | ------ |
| option      | 配置                 | object  | -            | -      |
| bind-resize | 是否绑定 resize 事件 | boolean | true / false | true   |

### 事件

| 名称          | 说明                   | 参数                                                         |
| ------------- | ---------------------- | ------------------------------------------------------------ |
| chart-created | echarts 实例创建后触发 | echarts 实例，用法见 [https://echarts.apache.org/zh/api.html#echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance) |

