## 数字卡片

用于展示动态变化的数字。

### 基础用法

默认使用滑动切换效果（type="slide"）。

:::demo

```html
<template>
    <t-digit-card :data="time"></t-digit-card>
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
    <t-digit-card :data="num" class="demo-1"></t-digit-card>
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
    <t-digit-card :data="time" type="flip" class="demo-2"></t-digit-card>
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
        .t-flip-item {
            font-size: 26px;
        }
    }
</style>

```

:::

:::demo

```html
<template>
    <t-digit-card :data="time" type="flip" class="demo-3"></t-digit-card>
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
        .t-flip-item {
            font-size: 32px;
            margin: 0 4px;
        }
        .t-text {
            color: #fff;
            background: #030d2a url('*/images/digit-card-bg.png') no-repeat center center / 100% 100%;
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

