## 数字卡片

用于展示动态变化的数字。

### 基础用法

默认使用滑动切换效果（type="slide"）。

:::demo data 值可以是字符串，数字部分有切换效果。

```html
<template>
    <t-count-card :data="time"></t-count-card>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
    setup() {
        const time = ref('');
        const addZero = n => n < 10 ? '0' + n : n;
        const setTime = () => {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
            // clearInterval(timer);
        };
        const timer = setInterval(setTime, 1000);
        onUnmounted(() => clearInterval(timer));

        return { time };
    },
};
</script>

```

:::

:::demo

```html
<template>
    <t-count-card :data="num" class="demo-1"></t-count-card>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
    setup() {
        const num = ref('');
        const timer = setInterval(() => {
            num.value = (Math.random() + '').slice(2, 8);
        }, 1500);
        onUnmounted(() => clearInterval(timer));

        return { num };
    },
};
</script>
<style lang="less">
    .demo-1 {
        // scoped style ::v-deep(.t-slide-item)
        .t-slide-item {
            margin: 0 4px;
            padding: 0 2px;
            font-size: 24px;
            color: @theme-color;
            background-color: @theme-bg;
            border-radius: 3px;
        }
    }
</style>

```

:::

### 翻转效果

:::demo

```html
<template>
    <t-count-card :data="time" type="flip" class="demo-2"></t-count-card>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
    setup() {
        const time = ref('');
        const addZero = n => n < 10 ? '0' + n : n;
        const setTime = () => {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
        };
        setTime();
        const timer = setInterval(setTime, 1000);
        onUnmounted(() => clearInterval(timer));

        return { time };
    },
};
</script>
<style lang="less">
    .demo-2 {
        font-size: 26px;
    }
</style>

```

:::

:::demo

```html
<template>
    <t-count-card :data="time" type="flip" class="demo-3"></t-count-card>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
    setup() {
        const time = ref('');
        const addZero = n => n < 10 ? '0' + n : n;
        const setTime = () => {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
        };
        setTime();
        const timer = setInterval(setTime, 1000);
        onUnmounted(() => clearInterval(timer));

        return { time };
    },
};
</script>
<style lang="less">
    .demo-3 {
        padding: 10px;
        background: #030d2a;
        font-size: 32px;
        .t-flip-item {
            margin: 0 4px;
        }
        .t-text {
            color: #fff;
            background: #030d2a url('*/images/count-card-bg.png') no-repeat center center / 100% 100%;
        }
    }
</style>

```

:::

### 使用插槽

可以自定义显示内容。

:::demo

```html
<template>
    <t-count-card :data="num" class="demo-4" v-slot="{ val }">
        <span :class="val < 5 ? 'blue' : 'green'" class="num">{{ val }}</span>
    </t-count-card>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
    setup() {
        const num = ref('3928196');
        const timer = setInterval(() => {
            num.value = (Math.random() + '').slice(2, 8);
        }, 1000);
        onUnmounted(() => clearInterval(timer));

        return { num };
    },
};
</script>
<style lang="less">
    .demo-4 {
        /* font-size: 16px; */
        .blue {
            color: rgb(84, 158, 230);
        }
        .green {
            color: rgb(117, 230, 117);
        }
        .num {
            display: inline-block;
            font-size: 30px;
            width: 0.8em;
        }
    }
</style>
```
:::

### 属性

| 参数 | 说明           | 类型            | 可选值       | 默认值 |
| ---- | -------------- | --------------- | ------------ | ------ |
| data | 需要显示的数据 | string / number | -            | -      |
| type | 切换类型       | string          | slide / filp | slide  |


### Slot 属性

| 参数 | 说明           | 类型            |
| ---- | -------------- | --------------- |
| val | 单个字符的值 | string |
| index | 单个字符的索引 | number |
