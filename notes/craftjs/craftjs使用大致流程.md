1. craftjs 上下文环境
    - Editor 创建上下文环境
    - resolver 接受 用户组件
2. Frame 提供渲染 resolver 接受 组件的上下文
    - Element   canvas 定义可拖拽区域
    - Element   canvas 子组件都可以拖拽

3. 定义用户组件
    - Text 组件
    - useNode hook  
    - connectors { connect,drag }
    - action { setProp }
    - Text.craft = {
        props:TextDefaultProps,
        related:{
            settings:TextSettings
        }
    }
    - TextSettings
    - useNode

3. SettingsPanel   
    - useEditor hook
    - actions selected isEnabled
    - currentNodeId = query.getEvent('selected').last()
    - 通过 currentNodeId 在 state 上获取到 当前 组件的 settings
