* react ts 能进行非常精密而自然的协作,毕竟 tsx 文件本质上也是一个 ts 文件。 因此可以直接享受到TS的类型检查能力。

* react中使用 ts 并没有非常复制的地方,我们主要关注三个方面
    - 组件声明 结合 ts 来进行组件属性 返回元素的有效性检查  这些组件声明都存在特殊用法？
    - 泛型坑位 React API 中 预留出的泛型坑位，这些泛型可以通过输入一个值来隐士推导,也可以直接显示声明结束后续的值输入。
    - 内置类型定义  主要是事件信息的类型定义以及内置工具类型两部分  onClick函数中应当如何为参数声明类型


* devDependencies 中包含了 @types/react 与 @types/react-dom  对于@types包的作用 TS会自动加载 node_modules/@types 下的类型定义来在全局使用

* React.FC 实际这个类型来自 @types/react
* vite-env.d.ts 声明文件
* /// <reference types="vite/client" />
* 三斜线指令是TS的一种特殊语法,用来为编辑器提供额外的指示信息。 它被写为以三斜线字符 ///开始的单行注释。
* 三斜线指令对于TS在编译过程中的行为有特定的影响,常见于告诉TS编译器需要引入额外的声明文件或设置特定的编译选项。




* types
    - shared.ts
    - [biz].ts
    - request.ts
    - tool.ts
* typings.d.ts
* tsconfig.json    