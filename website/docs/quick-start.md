## 快速开始

### 安装

#### NPM 安装

推荐使用 npm 来安装，更好地和打包工具配合使用。

```shell
$ npm install tiv --save
```

#### CDN 引入

 通过 [unpkg.com/tiv](https://unpkg.com/tiv/) 可以直接引入最新版本的资源，也可以切换需要的版本，在页面上引入 js 和 css 文件即可开始使用：

```html
<!-- import css -->
<link href="//unpkg.com/tiv/styles/index.css">
<!-- import tiv -->
<script src="//unpkg.com/tiv/lib/index.full.js"></script>
```

### 引入组件

#### 完整引入

在 main.js 中写入以下内容，样式文件需要单独引入：

```js
import { createApp } from 'vue'
import Tiv from 'tiv'
import 'tiv/style/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(Tiv)
app.mount('#app')
```

#### 按需引入

可以借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 只引入需要的组件，先安装 babel-plugin-import：

```shell
$ npm install babel-plugin-import -D
```

修改 babel.config.js :

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'tiv',
        customStyleName: (name) => {
          return `tiv/styles/${name}.css`
        },
      },
    ],
  ],
}
```

在 main.js 中引入需要的组件，比如 TagSelect。

```js
import { createApp } from 'vue'
import { TagSelect } from 'tiv'
import 'tiv/styles/base.css'
import App from './App.vue'

const app = createApp(App)
app.use(TagSelect)
// 或者
// app.component(TagSelect.name, TagSelect)
app.mount('#app')
```

+ 按需引入也需要 `tiv/styles/base.css` 基础样式。

+ 所有组件在使用时需要加前缀，比如：`t-tag-select`。

:::tip

+ 按需引入也需要 `tiv/styles/base.css` 基础样式。

+ 所有组件在使用时需要加前缀，比如：`t-tag-select`。

:::

