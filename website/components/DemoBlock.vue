<template>
    <div class="demo-block">
        <div class="demo">
            <slot name="demo"></slot>
        </div>
        <div v-if="$slots.default" class="description">
            <slot></slot>
        </div>
        <div class="highlight">
            <div ref="codeWrapElm" :class="{show: visible}" class="code-wrap">
                <div class="opt-btns">
                    <p class="copy-icon" :aria-label="copyTips" :class="{'tooltip-ped': copyTips}">
                        <img src="~*/images/clippy.svg" class="bg" alt />
                    </p>
                </div>
                <slot name="highlight"></slot>
            </div>
            <div class="demo-control">
                <span class="visible-btn" @click="toggleCode">{{ visible ? '隐藏': '显示' }}代码</span>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
    name: 'DemoBlock',
    data() {
        return {
            visible: false,
            copyTips: '',
        };
    },
    mounted() {
        this.clipboard = new Clipboard('.copy-icon', {
            target: () => this.$refs.codeWrapElm,
        });
        this.clipboard.on('success', (e) => {
            this.copyTips = 'copied!';
            this.clearTips();
            e.clearSelection();
        });
        this.clipboard.on('error', () => {
            this.copyTips = 'falied!';
            this.clearTips();
        });
    },
    beforeUnmount() {
        this.clipboard.destroy();
    },
    methods: {
        toggleCode() {
            this.visible = !this.visible;
        },
        clearTips() {
            if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.copyTips = '';
            }, 3000);
        },
    },
};
</script>

<style scoped lang="less">
@import '~@/styles/resources.less';
.demo-block {
    margin-bottom: 16px;
    border: 1px solid @border-color;
    border-radius: 3px;
    // overflow: hidden;
    .demo {
        padding: 20px;
    }
    .description {
        padding: 20px 20px 4px;
        border-top: 1px dashed @border-color;
        font-size: 14px;
        color: @text-color;
    }
    .highlight {
        position: relative;
        background: #fafafa;
        margin-bottom: 0;
    }
    &::v-deep(ul, li) {
        margin: 0;
        padding: 0;
    }
    &::v-deep(pre) {
        margin: 0;
        line-height: 1.6;
    }
    code.hljs {
        border: none;
    }
    .code-wrap {
        overflow: hidden;
        height: 1px;
        padding: 0 20px;
        background: #fff;
        &.show {
            height: auto;
        }
        &:hover {
            .opt-btns {
                display: flex;
            }
        }
    }
    .demo-control {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        background: #fff;
    }
    .visible-btn {
        padding: 0 4px;
        line-height: 44px;
        font-size: 14px;
        color: @theme-color;
        cursor: pointer;
        user-select: none;
    }
    .opt-btns {
        display: none;
        position: absolute;
        right: 30px;
        top: 10px;
        cursor: pointer;
        user-select: none;
    }
    .copy-icon {
        position: relative;
        width: 16px;
        height: 22px;
        margin: 0;
        background: transparent;
    }
    .tooltip-ped::after {
        position: absolute;
        top: 100%;
        right: 50%;
        z-index: 1000000;
        display: none;
        padding: 5px 8px;
        margin-top: 5px;
        font:
            normal normal 11px/1.5 Helvetica,
            arial,
            nimbussansl,
            liberationsans,
            freesans,
            clean,
            sans-serif,
            Segoe UI Emoji,
            Segoe UI Symbol;
        color: #fff;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        pointer-events: none;
        content: attr(aria-label);
        background: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        -webkit-font-smoothing: subpixel-antialiased;
        transform: translateX(50%);
    }
    .tooltip-ped::before {
        position: absolute;
        z-index: 1000001;
        display: none;
        width: 0;
        height: 0;
        color: rgba(0, 0, 0, 0.8);
        pointer-events: none;
        content: '';
        border: 5px solid transparent;
        top: auto;
        right: 50%;
        bottom: -5px;
        margin-right: -5px;
        border-bottom-color: rgba(0, 0, 0, 0.8);
    }
    .tooltip-ped:hover::before,
    .tooltip-ped:hover::after,
    .tooltip-ped:active::before,
    .tooltip-ped:active::after,
    .tooltip-ped:focus::before,
    .tooltip-ped:focus::after {
        display: inline-block;
        text-decoration: none;
    }
}
</style>
