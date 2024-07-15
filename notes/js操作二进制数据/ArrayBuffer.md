* [JavaScript类型化数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
    - js将类型化数组的实现拆分位缓冲和视图两部分
    - 缓冲是一种表示了数据块的对象，它没有格式可言，也没有提供访问其内容的机制。为了访问缓冲中的内存,你需要使用视图。
    - 视图提供了上下文 即数据类型 起始偏移量 和 元素数量。
* [使用复杂的数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#%E4%BD%BF%E7%94%A8%E5%A4%8D%E6%9D%82%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

    * ![](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays/typed_arrays.png)


* [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

* ArrayBuffer对象用来表示通用的原始二进制数据缓冲区。
* 它是一个字节数组，通常在其他语言中称为 byte array。 你不能直接操作 ArrayBuffer中的内容；
* 而是要通过类型化数组对象 或 DataView 对象来操作,它们会将缓冲区的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。


* ArrayBuffer 格式
 |      8字节     |     8字节     |            16字节       |            xx字节       |
 |      mark     |  frameType     |        playloadSize    |      playloadData      ｜


* Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。
* 在Uint8Array中， 8位 指的是每个数组元素占据的位数,即每一个元素使一个8位(1字节)的无符号整数。
*  

* ArrayBuffer
* TypedArray
* DataView









