<template>
    <div :class="{'t-all': expand}" class="t-tag-select">
        <div class="t-wrap">
            <ul ref="optionsEle" class="t-options">
                <li v-if="multiple && checkAll" :class="{'t-active': checkedAll}" class="t-tag" @click="handleCheckAll">{{ checkAllText }}</li>
                <li
                    v-for="item in options"
                    :key="item.value"
                    :class="{'t-active': multiple && modelValue.includes(item.value) || !multiple && modelValue === item.value, 't-disabled': item.disabled || disabled}"
                    class="t-tag"
                    @click.stop="handleCheck(item)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div v-if="foldable" class="t-expand-btn" @click="handleToggleExpand">
            <span v-if="expand" class="t-text">{{ collapseText }}</span>
            <span v-else class="t-text">{{ expandText }}</span>
            <i :class="{'t-up': expand}" class="t-icon tiv-font t-icon-arrow"></i>
        </div>
    </div>
</template>
<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import { resizeEvent } from '../hooks';

type valueType = string | number | boolean;
interface OptionType {
    name: string
    value: valueType
    disabled: boolean
}

export default defineComponent({
    name: 'TTagSelect',
    props: {
        options: {
            type: Array as PropType<OptionType[]>,
            required: true,
        },
        modelValue: {
            type: [String, Number, Boolean, Array],
            default: '',
        },
        expandable: {
            type: Boolean,
            default: false,
        },
        collapseText: {
            type: String,
            default: '收起',
        },
        expandText: {
            type: String,
            default: '展开',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        checkAll: {
            type: Boolean,
            default: false,
        },
        checkAllText: {
            type: String,
            default: '全部',
        },
    },
    emits: ['update:modelValue', 'change'],
    setup(props, ctx) {
        // 是否多选
        const multiple = computed(() => Array.isArray(props.modelValue));

        // 选择
        const emit = value => {
            ctx.emit('update:modelValue', value);
            ctx.emit('change', value);
        };
        const handleCheck = (item: OptionType) => {
            if (props.disabled || item.disabled) return;
            if (multiple.value) {
                // todo
                const value = props.modelValue as valueType[];
                const result = value.includes(item.value) ? value.filter(v => v !== item.value) : [...value, item.value];
                emit(result);
            } else {
                emit(item.value);
            }
        };

        // 展开收起
        const expand = ref(false);
        const handleToggleExpand = () => {
            expand.value = !expand.value;
        };

        // 是否需要折叠，宽度充足不显示
        const foldable = ref(false);
        const optionsEle = ref<HTMLElement>();
        const init = () => {
            if (props.expandable) {
                const height = optionsEle.value.clientHeight;
                const item = optionsEle.value.querySelector('li');
                if (!item) {
                    foldable.value = false;
                    return;
                }
                const itemHeight = item.clientHeight;
                const marginTop = window.getComputedStyle(item).marginTop;
                const marginBottom = window.getComputedStyle(item).marginBottom;
                const childHeight = itemHeight + parseInt(marginTop) + parseInt(marginBottom);
                foldable.value = height > childHeight;
                if (!foldable.value) {
                    expand.value = false;
                }
            } else {
                expand.value = true;
            }
        };
        onMounted(init);
        resizeEvent(init, 0);

        // 选择全部
        const handleCheckAll = () => {
            const value = props.modelValue as valueType[];
            const all = props.options.every(item => value.includes(item.value));
            if (all) {
                emit([]);
            } else {
                emit(props.options.map(item => item.value));
            }
        };
        // 是否已选择全部
        const checkedAll = computed(() => {
            if (!multiple.value || !props.checkAll) return false;
            return props.options.every(item => {
                const value = props.modelValue as valueType[];
                return value.includes(item.value);
            });
        });

        return {
            multiple,
            handleCheck,
            expand,
            handleToggleExpand,
            foldable,
            optionsEle,
            handleCheckAll,
            checkedAll,
        };
    },
});
</script>
