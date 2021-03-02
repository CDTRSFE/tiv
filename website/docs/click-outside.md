## 外部点击

点击目标元素以外的区域，调用指定的函数。

:::demo

```html
<template>
    <div class="wrap center">
        <div v-click-outside="clickOutside" class="item bg-blue" @click="clickInside">{{ text }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const text = ref('inside');
        const clickInside = () => {
            text.value = 'inside';
        }
        const clickOutside = () => {
            text.value = 'outside';
        };
        return { text, clickInside, clickOutside };
    },
};
</script>

<style scoped lang="less">
.wrap {
    height: 200px
}
.item {
    width: 180px;
    height: 140px;
    line-height: 140px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
}
</style>
```

:::

### 参数

| 类型               | 描述                     |
| ------------------ | ------------------------ |
| (e: Event) => void | 回调函数，参数是事件对象 |

