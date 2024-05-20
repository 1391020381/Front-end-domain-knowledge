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

