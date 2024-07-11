
// |      8字节     |     8字节     |            16字节       |            xx字节       |
// |      mark     |  frameType     |        playloadSize    |      playloadData      ｜


// mark：标识当前包体是否当前帧的最后一个包
// frameType：表示当前帧是否是关键帧
// playloadSize：帧数据长度
// playloadData：帧数据类型


const frame = new Uint8Array(data);   // data  frame 上面的格式

const bufferList = new Uint8Array(0); // 初始化
const dataview = new DataView(frame.buffer);
const mark = dataview.getUint8(0);
const frameType = dataview.getUint8(1);
const playloadSize = dataview.getUint16(2);
const data = frame.slice(4);
const olderLength = this.bufferList.byteLength;
const olderArray = this.bufferList;
bufferList = new Uint8Array(olderLength + data.byteLength);
bufferList.set(olderArray, 0);
bufferList.set(data, olderLength);
if (mark == 1) { // 完整的帧
//   const chunk = new EncodedVideoChunk({
//     type: frameType == 0 ? "key" : "delta",
//     data: this.bufferList,
//     timestamp: Date.now(),
//   });
//   this.mvideoDecoder.decode(chunk);
//   this.bufferList = new Uint8Array(0);
}
