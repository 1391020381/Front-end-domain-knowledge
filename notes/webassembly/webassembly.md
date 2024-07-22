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




* -D WASM 定义了一个名为 WASM的宏
* -s DISABLE_EXCEPTION_CATCHING=0：启用异常捕获
* -s ALLOW_MEMORY_GROWTH=1：允许内存动态增长。
* -s ENVIRONMENT='worker'：指定编译环境为Worker环境。
* -O3 指定进行最大程度的优化
* --bind 生成绑定代码
* 通过使用--bind选项生成绑定代码，开发人员可以在C++和JavaScript之间建立桥梁，实现跨语言交互和功能扩展
* -O0 指定不进行优化
* --pre-js  指定在编译过程中包含 pre.js文件内容
* -o wasm/v2.js：指定生成的JavaScript文件名为v2.js，并放置在wasm文件夹中。


# 生成绑定代码 --bind
## 在C++中
1. 定义绑定的类和函数
    * 在C++代码中，需要定义要绑定到JavaScript的类和函数。这些类和函数需要使用EMSCRIPTEN_BINDINGS宏来声明，并且需要将它们导出到Emscripten中。
2. 使用EMSCRIPTEN_BINDINGS宏：
    * 使用EMSCRIPTEN_BINDINGS宏来声明要导出的类和函数。这个宏会告诉Emscripten哪些类和函数需要生成绑定代码。
## 在JavaScript中 
1. 导入绑定的类和函数：
    * 在JavaScript代码中，需要导入绑定的类和函数，以便在JavaScript中使用C++中定义的功能。
2. 使用绑定的类和函数：
    * 在JavaScript中，可以直接调用C++中定义的绑定类的构造函数、成员函数，或者调用绑定的全局函数。
3. 处理数据类型转换：
    * 由于C++和JavaScript有不同的数据类型系统，可能需要进行数据类型转换，例如将JavaScript的字符串转换为C++的std::string，或将JavaScript的对象转换为C++对象。      


# 使用 C++ 编写 WebAssembly 错误捕获 处理
  