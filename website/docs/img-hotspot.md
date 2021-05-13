## 图片热区

用于在图片上定义热点区域。

### 基础用法

`hotspots` 属性指定热区列表，`path` 字段表示热区的坐标，将会直接使用在 [\<area\>标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/area) 的 `coords` 属性上；`cover` 字段表示热区是否被浅色区域覆盖。

:::demo `cover` 字段默认为 false。

```html
<template>
    <div class="hotspot-demo">
        <t-img-hotspot
            :image="img"
            :hotspots="list"
            class="com"
            @area-click="fn"
        ></t-img-hotspot>
    </div>
</template>

<script>
import img from '*/images/img-hotspot.jpeg';
export default {
    setup() {
        const list = [
            {
                title: '政府工作报告（摘要）',
                path: '673.824,1211.7776,928.608,1211.8,928.6,1335.356,673.824,1335.356',
                cover: true,
            },
            {
                title: '政协委员分组讨论政府工作报告',
                path: '660.576,1038.1404,939,1038.1404,939,1163.9,660.576,1163.9',
                cover: true,
            },
            {
                title: '自治区十三届人大四次会议各代表团审议政府工作报告',
                path: '660.576,862.8664,939,862.8664,939,1011.1,660.576,1011.1',
                cover: true,
            },
            {
                title: '“十三五”成绩亮眼 “十四五”底气更足',
                path: '660.576,244.838,942.9,244.838,942.9,836.4,660.576,836.4',
                cover: true,
            },
            {
                title: '自治区十三届人大四次会议开幕',
                path: '19.872,821,628.032,821,628.032,1344.7,19.872,1344.7',
                cover: true,
            },
            {
                title: '十三届全国人大四次会议 全国政协十三届四次会议欢迎中外记者采访',
                path: '487.5,27,939,27,939,207.8736,487.4,207.8736',
                cover: true,
            },
            {
                title: '习近平同党外人士共迎新春',
                path: '19.872,247.0204,628.032,247.0204,628.032,791.12,19.872,791.12',
                cover: true,
            },
        ];

        return {
            img,
            list,
            fn(data) {
                console.log(data);
            },
        };
    },
};
</script>

<style lang="less">
.hotspot-demo {
    text-align: center;
    .com {
        width: 400px;
    }
}
</style>
```

:::

### 属性

| 参数     | 说明     | 类型                   | 可选值 | 默认值 |
| -------- | -------- | ---------------------- | ------ | ------ |
| image    | 图片地址 | string                 | -      | -      |
| hotspots | 热区列表 | array[{ path, cover }] | -      | -      |

### 事件

| 名称       | 说明           | 参数             |
| ---------- | -------------- | ---------------- |
| area-click | 点击热区时触发 | 被点击的热区数据 |
| area-hover | 移入热区时触发 | 移入的热区数据   |

