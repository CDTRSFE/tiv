<template>
    <div class="t-img-hotspot">
        <img ref="imageEle" :usemap="'#' + mapName" :src="image" class="t-img" />
        <canvas ref="canvasEle" class="t-canvas"></canvas>
        <map :id="mapName" :name="mapName">
            <area
                v-for="item in coordsList"
                :key="item.points"
                :coords="item.points"
                shape="poly"
                class="t-area"
                @mouseenter="$emit('area-hover', item.data)"
                @click="$emit('area-click', item.data)"
            />
        </map>
    </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, PropType, ref, watch } from 'vue';

interface HotspotType {
    path: string
    cover: boolean
    [key: string]: any
}

interface CoordsType {
    points: string
    data: HotspotType
}

// 传入的坐标是相对于原图的
const setCoords = (coords:string, width: number, height: number, originW: number, originH: number) => {
    return (coords || '').split(',').map((v, index) => {
        const val = Number(v);
        return index % 2 === 0 ? val / originW * width : val / originH * height;
    }).join(',');
};

export default defineComponent({
    name: 'TImgHotspot',
    props: {
        image: {
            type: String,
            required: true,
        },
        hotspots: {
            type: Array as PropType<HotspotType[]>,
            default: () => [],
        },
        coverColor: {
            type: String,
            default: 'rgba(71,134,255,0.2)',
        },
    },
    emits: ['area-hover', 'area-click'],
    setup(props) {
        const imageEle = ref<HTMLImageElement>();
        let imgWidth = 0;
        let imgHeight = 0;
        const coordsList = ref<CoordsType[]>();

        const loadFn = () => {
            imgWidth = imageEle.value.width;
            imgHeight = imageEle.value.height;

            const img = new Image();
            img.src = props.image;
            img.onload = () => {
                coordsList.value = props.hotspots.map(data => {
                    const points = setCoords(data.path, imgWidth, imgHeight, img.width, img.height) || '';
                    return {
                        points,
                        data,
                    };
                });
                drawCover();
            };
        };

        const canvasEle = ref<HTMLCanvasElement>();
        const drawCover = () => {
            const canvas = canvasEle.value;
            canvas.width = imgWidth;
            canvas.height = imgHeight;

            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            coordsList.value.forEach(item => {
                if (item.data.cover !== true) return;
                const points = item.points.split(',').map(item => Number(item));
                ctx.moveTo(points[0], points[1]);
                for (let i = 2; points[i]; i = i + 2) {
                    ctx.lineTo(points[i], points[i + 1]);
                }
            });

            ctx.closePath();
            ctx.fillStyle = props.coverColor;
            ctx.strokeStyle = 'transparent';
            ctx.fill();
            ctx.stroke();
        };

        onMounted(() => {
            imageEle.value.onload = loadFn;
        });
        watch(() => props.hotspots, loadFn);

        return {
            imageEle,
            canvasEle,
            mapName: 't-map-' + Date.now(),
            coordsList,
        };
    },
});
</script>
