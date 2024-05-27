* Button 组件会提示 Button不能嵌套 可以暂时不用理会， CustomNodeRender 中会 有Button 看需要怎么修改

# material
1. createReactMaterial 
    - component
    - related settingRender
    - default children
    - 组装 craftjs 配置   defaultProps  component  settings 
2. withConnectNode
    - 包裹 craftjs 方法
    - useParseBinding
    - 并绑定 props 


# Right 
1. PROPS  MountSettings
2. STYLE  StylePropsPanel
3. EVENTS EventsPanel


* mount-settings.tsx
    - useEditor currentNodeId  {
        id: currentNodeId,
        currentNodeProps: data.props,
        SettingRender: related?.settingRender,
      }

* 一般情况下 属性面板的 key value 会通过  form.onValuesChange  form.onFinish
# setter

* 自定义控件  可以暂时先搁置 使用原生的antd表单组件
    - 提供受控属性 value 或其他与 valuePropName的值同名的属性
    - 提供 onChange事件 或 trigger的值 同名的事件

* packages/setter拆分出来单独维护
* setter内部会提供各种各样的自定义表单控件
* 可以在 低代码平台属性面板使用 
* 也可以在任何使用 antd Form 组件中进行运用
* Panel Setter Field

# 组件库



* 组件库新增包需要重新打包，然后在 left  canvas 中 引入 才可以拖拽 编辑




# 动态逻辑
* 动态逻辑和状态  
* function  Dialog
1. vm 
    - iframe 创建 iframe  connectJsRuntimeVM
    - execute 引入 connectJsRuntimeVM 注入gloabalScope  并通过 sandbox.eval 执行 code
    - mountJsModule builder
    - installNpm
2. builder
    - sucrase
3. 代码执行   
    - Function
    - window.eval

4. 解析可执行代码  
    - template 模版渲染
5. 页面中使用 
    - right setting {{props.size}}
    - 在 widthMaterialNode 中比较粗暴的方式是 当 props 发生变化的时候,通过 cloneDeepWith方法深度遍历每个属性
    - 通过 isExpression判断 value 
    - 如果是表达式的情况下,将其调用 parseJsStrToLte的结果
    - browserRuntimeVM.excute执行  此时 将原始的 props传递给 browserRuntimeVM创建当前的上下文
    - React.useMemo  用于优化性能 其作用是记忆计算结果 当依赖不变时,避免在每次组件渲染时重新计算一些开销较大的操作。
    - const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);
    - computeExpensiveValue 函数
    - a b 依赖项
    - memoizedProps


 * 右侧事件Event  
 * Form.List 动态添加表单
 * handleFormChange   
    - actions.setProp(nodeId,(setterProps)=>{
        return merge(setterProps,{
            __events__:events
        })
    })
* 在 useParseBinding中 会观察 props store的变化然后处理 属性 props(状态和事件)


* 属性 样式 事件

* 全局state管理   useCreateStore   
* FrameworkContextProvider
* import ReactFrameComponent, {
  FrameContextConsumer,
} from "react-frame-component";
* editor  left  queries

* packages/setter/src/fields
* binding-state-setter.tsx BindingStateSetter  
* 在 props中添加 $$store 并监听 然后绑定到全局状态中
* 然后在 组件右侧编辑器中使用 store获取变量
* 然后  createReactMaterial useParseBinding 处理


```

useThrottleEffect(() => {
      if (props.$$store && Array.isArray(props.$$store)) {
        const result: Record<string, any> = {}
        props.$$store.forEach((item: any) => {
          result[item.name] = item.defaultVal
        })
        console.log(result, 'result')

      
      store.dispatch(onUpdated({
        [id]: result
      }))
      }
    }, [props.$$store])



```

# React组件的动态加载 
* lowcode 中新的业务组件，开发完，只用发布组件，然后远程加载。 用户刷新页面即可使用。
    -  lowcode 中使用
    -  使用craftjs 组件的模版中也要 使用

# 国际化
* main /  当前应用的基本信息配置
