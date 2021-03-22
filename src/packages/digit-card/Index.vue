<template>
    <div class="t-digit-card">
        <template v-for="(t, i) in textArr" :key="i">
            <component :is="type + '-item'" :data="t"></component>
        </template>
    </div>
</template>
<script lang='ts'>
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
import SlideItem from './slideItem.vue';
import FlipItem from './flipItem.vue';

type NameType = 'slide' | 'flip';

export default defineComponent({
    name: 'TDigitCard',
    components: {
        SlideItem,
        FlipItem,
    },
    props: {
        data: {
            type: [Number, String],
            default: '',
        },
        type: {
            type: String as PropType<NameType>,
            default: 'slide',
        },
    },
    setup(props) {
        const textArr = computed(() => {
            return (props.data + '').split('').filter(s => !/\s/.test(s));
        });

        return {
            textArr,
        };
    },
});
</script>
