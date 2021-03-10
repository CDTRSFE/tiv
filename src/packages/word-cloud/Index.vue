<template>
    <div ref="chartEle" class="t-word-cloud"></div>
</template>
<script lang='ts'>
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
import type { ECharts } from 'echarts';
import 'echarts-wordcloud';
import { windowResize, resizeEvent } from '../hooks';
import merge from 'lodash/merge';

export default defineComponent({
    name: 'TWordCloud',
    props: {
        option: {
            type: Object,
            default: () => ({}),
        },
        bindResize: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['instance-created'],
    setup(props, ctx) {
        const chartEle = ref<HTMLElement>();
        let myChart: ECharts;
        const setChart = () => {
            if (!myChart) return;
            const option = merge({
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
                        shadowBlur: '10px',
                        shadowColor: '#333',
                    },
                },
                data: [],
            }, props.option);

            myChart.setOption({
                series: [
                    option,
                ],
            });
        };

        watch(props.option, setChart);

        onMounted(() => {
            myChart = echarts.init(chartEle.value);
            setChart();
            ctx.emit('instance-created', myChart);
            props.bindResize && windowResize(myChart.resize, 1000);
        });
        let once = true;
        resizeEvent(chartEle, () => {
            // 第一次不需调用 resize
            !once && myChart.resize();
            once = false;
        }, 1000);
        onBeforeUnmount(() => {
            myChart.dispose();
        });

        return {
            chartEle,
        };
    },
});
</script>
