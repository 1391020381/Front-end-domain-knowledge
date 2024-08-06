* [Web Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)

* Web Worker 使得在一个独立于Web应用程序主执行线程的后台线程中运行脚本操作成为可能。这样做的好处是可以独立线程中执行费时的处理任务，使主线程(通常是UI线程)的运行不会被阻塞/放慢。


# 主线程
1. 主线程  let worker = new Worker('worker.js')
    - Worker不能读取本地脚本文件，所以这个脚本必须来自网络。
2. worker.postMessage()  向Worker发消息
3. worker.onmessage 指定监听函数 接受子线程发回来的消息    

# Worker线程
1. 监听 message事件

```
self.addEventListener('message',function(e){
    e.data
    self.postMessage()
},false)

// self代表子线程自身 即子线程的全局对象。

// 等同于
this.addEventListener('message',function(e){
    // e.data
},false)

addEventListener("message",function(e){

},false)

```

# Worker加载脚本
* Worker内部如果要加载其他脚本， 有一个专门方法 importScript()

# 错误处理
* 主线程可以监听 Worker是否发生错误 如果发生错误 Worker会触发主线程的error事件

```
worker.onerror(function(){})

// 或者

worker.addEventListener('error',function(event){})


// Worker内部也可以监听error事件

```

# 关闭 Worker
* 使用完毕，为了节省系统资源 必须关闭Worker
* worker.terminate() 
* self.close()

# 数据通信
* 主线程与Worker之间通信内容，可以是文本 也可以是对象。
* 需要注意的是，这种通信是拷贝关系，即不是传值而不是拷贝,Worker对通信内容的修改，不会影响到主线程。
* 事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化的字符串发给Worker,后者再将它还原。
* 主线程与Worker之间也可以交换二进制数据。
* 拷贝方式发送二进制数据，会造成性能问题。 比如 主线程向Worker发送一个500MB文件，默认情况下浏览器会生成一个原文件的拷贝。为了解决这个问题，JS允许主线程把二进制数据直接转移给子线程，但是一旦转移，主线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面。
* 这种转移数据的方法 Transferabler Object 这使得主线程客户快速把数据交给Worker,对于音视频处理 3D处理特别方便。

```
// Transferable Objects 格式
worker.postMessage(arrayBuffer, [arrayBuffer]);

// 例子
var ab = new ArrayBuffer(1);
worker.postMessage(ab, [ab]);


```

# API
1. 主线程
2. Worker线程



# WebAssembly 与 Web Worker

* 加载和运行WebAssembly代码

```
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // 调用导出函数：
    obj.instance.exports.exported_func();

    // 或者获取导出内存的缓存内容：
    const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // 或者获取导出表格中的元素：
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);



```

# WebAssembly关键概念
1. 模块
2. 内存
3. 表格
4. 实例

* Module.onRuntimeInitialized 是一个JS回调函数，它在Wasm模块的内部运行时初始化完成之后被调用。 这个回调函数提供了一个时机,让开发者可以在模块准备好之后执行一些操作,比如调用模块导出的函数或设置于模块交互的事件监听器


* EM_JS
* EM_JS 是 Emscripten提供了一个宏，用于在C++代码中嵌入js代码。这使得可以在C++中直接调用 js函数或执行js代码。