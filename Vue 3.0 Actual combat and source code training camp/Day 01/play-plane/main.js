// console.log("main.js111222");
import { createApp } from './src/runtime-canvas'
import App from './src/App'
import { getRootContainer } from './src/Game'

// 需要根组件
// 根容器
// canvas → pixi.js

createApp(App).mount(getRootContainer())