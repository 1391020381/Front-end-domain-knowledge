* [走进 WebAssembly 的世界](https://juejin.cn/column/7210666370487681082)
* [编译 C/C++ 为 WebAssembly](https://developer.mozilla.org/zh-CN/docs/WebAssembly/C_to_Wasm)
* [安装Emscripten-WebAssembly的开发环境环境搭建](https://juejin.cn/book/7174425017277972513/section/7175723166285692940)


# WebAssembly模块解
1. 模块 (Modules)
2. 类型 (Types)
3. 变量 (Variables)
4. 函数 (Functions)
5. 指令 (Instructions)
6. 陷阱 (Traps)
7. 表 (Tables)
8. 线性内存(Linear memory)


# WebAssembly程序生命周期
1. 使用 WebAssembly文本格式或其他语言(C++ Rust Go等)编写程序，通过各自的工具链编译为WebAssembly汇编格式.wasm文件
2. 在网页中使用 fetch XMLHttpRequest等获取 .wasm文件 (二进制流)
3. 将 .wasm编译成模块,编译过程中进行合法性校验
4. 实例化。 初始化导入对象 创建模块的实例
5. 执行实例的导出函数 完成所需操作。

# WebAssembly对象
1. WebAssembly.Module
2. WebAssembly.Memory
3. WebAssembly.Table
4. WebAssembly.Instance
5. WebAssembly.instantiate()  将WebAssembly 二进制代码编译为模块 并创建其实例
6. WebAssembly.compile()  该方法用于将 WebAssembly二进制代码 .wasm 编译为 WebAssembly.Module
7. WebAssembly.validate() 校验 WebAssembly二进制代码是否合法

# WebAssembly汇编语言
# WebAssembly二进制格式
# Emscripten和WebAssembly