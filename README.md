# react 热更新配置( 基于react-hot-loader 4.x )
### 1.下载 依赖

` yarn add -D react-hot-loader @hot-loader/react-dom`

### 2.在webpack配置中的 resolve 添加
```javascript
// webpack.config.js
entry: ['react-hot-loader/patch', './src'],
resolve: {
  alias: {
    'react-dom': '@hot-loader/react-dom',
  },
},
```

### 3.在根目录的 .babelrc 添加plugins
```javascript
// .babelrc
{
  "plugins": ["react-hot-loader/babel"]
}
```

### 4.在 app.( tsx | jsx | js) 中 添加 hot 代码； 只需要在根组件添加 hot
```javascript
// App.tsx
import { hot } from 'react-hot-loader/root';
const App = () => <div>Hello World!</div>;
export default hot(App);
```

------------


### [参考更多配置](https://www.npmjs.com/package/react-hot-loader "参考更多配置")