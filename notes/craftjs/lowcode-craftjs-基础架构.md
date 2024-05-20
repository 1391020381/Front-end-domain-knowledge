* [云游戏通用功能](https://doc.weixin.qq.com/sheet/e3_AKEAFgaCAG43Q1sC1K7QNS9hLUi9K?scode=ALkA0QddAA4A2822QnAKEAFgaCAG4&version=4.1.22.6019&platform=win&tab=o7hp67)

* ky  基于Fetch API的 HTTP客户端库
* immer 状态管理
* re-resizable  调整大小
* styled-system  样式系统
* sucrase babel 替代品
- zustand  Bear necessities for state management in React
* 业务 apps
    - editor
    - main
    - site
* packages
    - core  lowcode 核心逻辑相关
    - mui  UI组件库
    - setter
* server



* editor  components  使用了 @chakra-ui/layout  需要重构 editor components
* editor 中 components 使用的只有 container   其他的都在 mui 中有
* UI层自定义 业务组件库   需要重新搞   现在 使用了 @mantine/core

*  组件   区分 view.tsx  panel.text   mui -> layout grid
*  组件  -> settings 的抽象


* 其他功能   js   事件  数据     左侧组件动态 加载 例如前端新创建组件上传 通过接口获取挂载使用