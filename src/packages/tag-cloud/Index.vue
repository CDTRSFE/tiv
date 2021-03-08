<template>
    <div ref="chartEle" class="t-tag-cloud"></div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import type { PropType } from 'vue';
import TagCloud from 'TagCloud';
import { getRandomInt } from '../utils/util';

type DataType = string[];
interface TagCloudType {
    update: (texts: DataType) => void
    pause: () => void
    resume: () => void
    destroy: () => void
}

export default defineComponent({
    name: 'TTagCloud',
    props: {
        data: {
            type: Array as PropType<DataType>,
            default: () => [],
        },
        option: {
            type: Object,
            default: () => ({}),
        },
        colors: {
            type: Array as PropType<string[]>,
            default: () => [],
        },
    },
    emits: ['instance-created', 'click-tag'],
    setup(props, ctx) {
        const chartEle = ref<HTMLElement>();
        let myChart: TagCloudType;
        let itemClass = '';
        const setChart = () => {
            myChart && myChart.destroy();
            const option = Object.assign({
                radius: 140,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                direction: 45,
                keep: false,
                containerClass: 'tag-cloud-container',
                itemClass: 'tag-cloud-item',
                useContainerInlineStyles: true,
                useItemInlineStyles: true,
            }, props.option);
            myChart = TagCloud(chartEle.value, props.data, option);
            itemClass = option.itemClass;

            setColor();
        };

        const setColor = () => {
            if (!props.colors.length) return;
            // eslint-disable-next-line no-undef
            const items = chartEle.value.querySelectorAll('.' + itemClass) as NodeListOf<HTMLElement>;
            items.forEach(item => {
                const index = getRandomInt(0, props.colors.length);
                item.style.color = props.colors[index];
            });
        };

        const handleTagClick = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            if (el.classList.contains(itemClass)) {
                ctx.emit('click-tag', el.innerText);
            }
        };

        watch(() => props.option, setChart);
        watch(() => props.data, (text) => {
            myChart.update(text);
        });
        watch(() => props.colors, setColor);

        onMounted(() => {
            setChart();
            ctx.emit('instance-created', myChart);
            chartEle.value.addEventListener('click', handleTagClick);
        });
        onBeforeUnmount(() => {
            myChart.destroy();
            chartEle.value.removeEventListener('click', handleTagClick);
        });

        return {
            chartEle,
        };
    },
});
</script>
