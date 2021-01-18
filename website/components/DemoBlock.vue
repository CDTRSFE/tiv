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
                    <p class="copy-icon" :aria-label="copyTips" :class="{tooltipped: copyTips}">
                        <img src="~*/images/clippy.svg" class="bg" alt>
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
@import "~@/styles/var.less";
.demo-block {
    border: 1px solid #f1f1f1;
    border-radius: 3px;
    // overflow: hidden;
    .demo {
        padding: 20px;
    }
    .description {
        padding: 20px 20px 4px;
        border-top: 1px dashed #f1f1f1;
        font-size: 14px;
        color: @text-color;
    }
    .highlight {
        position: relative;
        background: #fafafa;
        margin-bottom: 0;
    }
    pre {
        margin: 0;
        line-height: 1.6;
    }
    code.hljs {
        border: none;
    }
    .code-wrap {
        overflow: hidden;
        height: 1px;
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
        right: 10px;
        top: 10px;
        cursor: pointer;
        user-select: none;
    }
    .copy-icon {
        position: relative;
        width: 20px;
        height: 22px;
        margin: 0;
        background: transparent;
    }
    .tooltipped:after {
        position: absolute;
        z-index: 1000000;
        display: none;
        padding: 5px 8px;
        font: normal normal 11px/1.5 Helvetica, arial, nimbussansl,
            liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji",
            "Segoe UI Symbol";
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
    }
    .tooltipped:before {
        position: absolute;
        z-index: 1000001;
        display: none;
        width: 0;
        height: 0;
        color: rgba(0, 0, 0, 0.8);
        pointer-events: none;
        content: "";
        border: 5px solid transparent;
        top: auto;
        right: 50%;
        bottom: -5px;
        margin-right: -5px;
        border-bottom-color: rgba(0,0,0,.8);
    }

    .tooltipped:hover:before,
    .tooltipped:hover:after,
    .tooltipped:active:before,
    .tooltipped:active:after,
    .tooltipped:focus:before,
    .tooltipped:focus:after {
        display: inline-block;
        text-decoration: none;
    }
    .tooltipped:after {
        transform: translateX(50%);
        top: 100%;
        right: 50%;
        margin-top: 5px;
        position: absolute;
        z-index: 1000000;
        display: none;
        padding: 5px 8px;
        font: normal normal 11px/1.5 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";
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
        background: rgba(0,0,0,.8);
        border-radius: 3px;
        -webkit-font-smoothing: subpixel-antialiased;
    }
}
</style>
