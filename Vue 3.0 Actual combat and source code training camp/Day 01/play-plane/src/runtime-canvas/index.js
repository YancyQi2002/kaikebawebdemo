import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'

const renderer = createRenderer({
    createElement (type) {
        console.log(type)
        // 绘制
        // pixi.js
        let element
        if (type === "rect") {
            // 创建一个矩形
            element = new Graphics()
            element.beginFill(0xff0000)
            element.drawRect(0,0,500,500)
            element.endFill()
        }
        else if (type === "circle") {
            // 创建一个圆
            element = new Graphics()
            element.beginFill(0xffff00)
            element.drawCircle(0,0,50)
            element.endFill()
        }
        return element
    },

    setElementText (node, text) {
        const cText = new Text(text)
        node.addChild(cText)
    },

    createText (text) {
        return new Text(text)
    },

    patchProp (el, key, preValue, nextValue) {
        // pixi
        // el.x = value
        // el.y = value
        el[key] = nextValue
    },

    insert (el, parent) {
        console.log(el)
        console.log(parent)
        // append()
        parent.addChild(el)
    },
})

export function createApp (rootComponent){
    return renderer.createApp(rootComponent)
}