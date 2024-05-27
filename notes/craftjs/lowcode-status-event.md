# craftjs基本使用 
1. component  canvas  setting-panel
2. props style event
3. createReactMaterial  withConnectNode   useParseBinding    view component   props变化更新 componet
# 全局状态
1. 国际化 
2. store  
3. event



* ES6模块的在线构建和运行
* 模块与组件事件Props的参数绑定
* 如何将API模块化的提供在代码编辑器当中进行使用 

* 模块流程  Monaco编辑器下写的JS模块代码都会进行运行时编译,和我们本地构建一样的原理
* 事件流程  物料组件可以提前声明将自身拥有的事件属性暴露出去,在事件设置器中就可以拿到对应的事件列表从而绑定对应模块中声明好的函数

* Monaco
* TransformCode
    - babel-standalone
    - sucrase
    - wasm