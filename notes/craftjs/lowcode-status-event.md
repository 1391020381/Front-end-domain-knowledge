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


 * handleMountJsMoudle  通过 connectJsRuntimeVM链接到执行容器后
 * 再执行 sucraseTransformCode方法转换cjs模块代码
 * 最后通过 compileModuleResolve将 cjs模块执行输出成一个能直接使用的js对象 将其挂载到 sandbox.huosScope.jsModule指定目录下。

 ```
 React.useffect(()=>{
    jsRuntime.mountJsMoudle(jsMoudleCode)
 },[jsModuleCode])

 ```  

 # jsRuntime 
    - class BrowserRuntimeVM
    - constructor 通过 document.createElement("iframe") 创建一个iframe
    - onEvalCode(code,globalScope)  传入 code globalScope 通过 上面创建的 iframe来执行code 并返回执行的值
    - execute(code,globalScope)   对onEvalCode 封装一层 
    - loadJS   
 # builder
    - sucraseTransformCode 编译代码
    - compileModuleResolve 处理依赖
    - sandbox.huosScope.depends   core/vm/scope
 # vm  
 * core/vm
 * execute
 

 * 物料组件(events) -> 事件管理器 -> 绑定模块函数 ->  withComponent  -> 逻辑执行
 * createReactMaterial(ButtonView,{
    displayName:"按钮",
    custom:{
      useResize:false,
      eventOptions:[
         {
            label:"(onClick)点击事件",
            value:"onClick"
         },
         {
            label:"(onChange)修改事件",
            value:"onChange",
         }
      ]
    },
    related:{
      settingRender:Panel,
    }
 })
 * 物料组件注册后,使用useEditor可以通过当前Id获取到组件自定义的事件列表
 * data?.custom?.evnetOptions  即可在事件管理器中进行选择
 * 
 * useAsyncEffect   editor/right/props/component-code.tsx