// 根组件

import { defineComponent, h } from '@vue/runtime-core'
import Circle from './component/Circle'

export default defineComponent ({
    render() {
        // 创建虚拟节点 vnode
        // <rect x=100 y=100>I LOVE ZXQXYQXYYYH<circle></circle></rect>
        // const vnode = h("rect",{x: 100,y: 100}, "I LOVE ZXQXYQXYYYH")
        const vnode = h("rect",{x: 100,y: 100}, [
            "I LOVE Southern Jingju",
            // h("circle",{x: 150,y: 150}),
            h(Circle),
        ])
        console.log(vnode)
        return vnode
    }
})