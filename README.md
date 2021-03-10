<p align="center">
  <a href="https://CDTRSFE.github.io/tiv">
    <img width="150" src="./website/images/tiv-logo.png" />
  </a>
</p>

<h1 align="center">Tiv UI</h1>

<p align="center">一个基于 Vue3 的 UI 组件库。</p>

## 特性

+ 高频使用的中后台组件，作为其他组件库（比如：element-plus）的补充。
+ 丰富的可视化大屏组件，快速构建页面。
+ 使用 Typescript 开发。
+ 自定义主题，方便实现换肤功能。

## 安装

```shell
$ npm install tiv --save
```

## 使用

```js
import { createApp } from 'vue';
import Tiv from 'tiv';
import 'tiv/styles/index.css';

createApp().use(Tiv).mount('#app');
```

## 本地开发

拉取代码到本地，并安装依赖

```shell
$ git clone git@github.com:CDTRSFE/tiv.git
$ cd tiv
$ npm install
```

运行，然后访问 `localhost:8089`

```shell
$ npm run serve
```

检测 JavaScript

```shell
$ npm run lint
```

检测 Less / CSS

```shell
$ npm run lint:style
```

预览组件

```shell
$ npm run serve-view
```

发布文档

```shell
$ npm run publish:docs
```

发布组件库

```shell
$ npm run publish:lib
```

## License
[MIT](http://opensource.org/licenses/MIT)


