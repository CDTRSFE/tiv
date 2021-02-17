## 标签选择器

标签选择，带有折叠和全选功能，支持单选和多选。

### 基础用法

:::demo

```html
<template>
    <t-tag-select v-model="value" :options="options"></t-tag-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(1);
        const options = ref(Array.from({ length: 5 }).map((_, index) => {
            return {
                name: '选项' + (index + 1),
                value: index + 1,
            };
        }));
        return { value, options };
    }
};
</script>
```

:::

### 多选

:::demo 绑定的值是数组，表示可以多选。

```html
<template>
    <t-tag-select v-model="value" :options="options"></t-tag-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value = ref([1, 2]);
        const options = ref(Array.from({ length: 20 }).map((_, index) => {
            return {
                name: '选项' + (index + 1),
                value: index + 1,
            };
        }));
        return { value, options };
    }
};
</script>
```

:::

### 禁用状态

可设置整个选择器不可用，或某个选项不可用。

:::demo 给 `t-tag-select` 设置 `disabled` 属性，整个选择器不可用。也可以通过 `options` 设置某一项不可用。

```html
<template>
    <t-tag-select v-model="value1" :options="options" disabled></t-tag-select>
    <t-tag-select v-model="value2" :options="options" class="mt10"></t-tag-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value1 = ref(1);
        const value2 = ref([1, 2]);
        const options = ref([
            {
                name: '选项1',
                value: 1,
            },
            {
                name: '选项2',
                value: 2,
                disabled: true,
            },
            {
                name: '选项3',
                value: 3,
                disabled: true,
            },
            {
                name: '选项4',
                value: 4,
            },
            {
                name: '选项5',
                value: 5,
            },
        ]);
        return { value1, value2, options };
    },
};
</script>

<style scoped lang="less">
.mt10 {
    margin-top: 10px;
}
</style>
```

:::

### 选项折叠

选项过多可以折叠选项。

:::demo 设置 `expandable` 属性开启折叠

```html
<template>
    <t-tag-select v-model="value" :options="options" expandable></t-tag-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value = ref([1]);
        const options = ref(Array.from({ length: 20 }).map((_, index) => {
            return {
                name: '选项' + (index + 1),
                value: index + 1,
            };
        }));
        return { value, options };
    },
};
</script>
```

:::

### 选择全部

选择全部选项。

:::demo

```html
<template>
    <t-tag-select v-model="value" :options="options" check-all></t-tag-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const value = ref([1]);
        const options = ref(Array.from({ length: 5 }).map((_, index) => {
            return {
                name: '选项' + (index + 1),
                value: index + 1,
            };
        }));
        return { value, options };
    },
};
</script>
```

:::

### 属性

| 参数           | 说明                          | 类型                        | 可选值     | 默认值 |
| -------------- | ----------------------------- | --------------------------- | ---------- | ------ |
| options        | 选项，键名见 `选项属性`       | array                       | -          | -      |
| v-model        | 绑定值，类型为 Array 时为多选 | string/number/boolean/array | -          | -      |
| expandable     | 选项较多时是否折叠            | boolean                     | true/false | false  |
| expand-text    | 展开按钮文本                  | string                      | -          | 展开   |
| collapse-text  | 收起按钮文本                  | string                      | -          | 收起   |
| disabled       | 是否禁用                      | boolean                     | true/false | false  |
| check-all      | 是否显示全选按钮              | boolean                     | true/false | false  |
| check-all-text | 全选按钮文本                  | string                      | -          | 全部   |

### 选项属性

| 参数     | 说明         | 类型                  | 可选值     | 默认值 |
| -------- | ------------ | --------------------- | ---------- | ------ |
| name     | 选项名       | string                | -          | -      |
| value    | 选项值       | string/number/boolean | -          | -      |
| disabled | 是否禁用选项 | boolean               | true/false | false  |

### 事件

| 名称   | 说明         | 回调参数   |
| ------ | ------------ | ---------- |
| change | 选择后的回调 | 更新后的值 |

