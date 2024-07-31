// |      8字节     |     8字节     |            16字节       |            xx字节       |
// |      mark     |  frameType     |        playloadSize    |      playloadData      ｜

// mark：标识当前包体是否当前帧的最后一个包
// frameType：表示当前帧是否是关键帧
// playloadSize：帧数据长度
// playloadData：帧数据类型

const frame = new Uint8Array(data); // data  frame 上面的格式

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
if (mark == 1) {
  // 完整的帧
  //   const chunk = new EncodedVideoChunk({
  //     type: frameType == 0 ? "key" : "delta",
  //     data: this.bufferList,
  //     timestamp: Date.now(),
  //   });
  //   this.mvideoDecoder.decode(chunk);
  //   this.bufferList = new Uint8Array(0);
}

// https://developer.mozilla.org/en-US/docs/Web/API/RTCEncodedVideoFrame/type#value

// websocket h265是自定义数据格式
// type 关键帧   data 数据    使用  EncodedVideoChunk 处理 再使用   VideoDecoder 解码

//  webrtc fakeh264 
// webrtc h264   
// RTCEncodedVideoFrame  RTCEncodedAudioFrame 
// RTCEncodedVideoFrame  VideoDecoder EncodedVideoChunk
// RTCEncodedAudioFrame  AudioDecoder  EncodedAudioChunk


// window.webrtcChunks 中 RTCEncodedVideoFrame视频数据  type 都是 empty 但是 通过数据保存在一起 Blob下载 还是可以播放 

function handleChunks() {
  window.keyChunks = [];
  window.deltaChunks = [];
  window.emptyChunks = [];

  window.webrtcChunks.forEach((item) => {
    if (item.type === "key") {
      window.keyChunks.push(item);
    }
    if (item.type === "delta") {
      window.deltaChunks.push(item);
    }
    if (item.type === "empty") {
      window.emptyChunks.push(item);
    }
  });
}




const EncodeVideoStream = new TransformStream({
  start(controller) {
    // Skipped: a few per-frame parameters
    this.encodedCallback = null;
    this.encoder = encoder = new VideoEncoder({
      output: (chunk, cfg) => {
        if (cfg.decoderConfig) {
          // Serialize decoder config as chunk
          const decoderConfig = JSON.stringify(cfg.decoderConfig);
          const configChunk = { … };
          controller.enqueue(configChunk);
        }
        // Skipped: increment per-frame parameters
        if (this.encodedCallback) {
          this.encodedCallback();
          this.encodedCallback = null;
        }
        controller.enqueue(chunk);
      },
      error: e => { console.error(e); }
    });
    VideoEncoder.isConfigSupported(encodeConfig)
      .then(encoderSupport => {
        // Skipped: check that config is really supported
        this.encoder.configure(encoderSupport.config);
      })
  },
  transform(frame, controller) {
    // Skip: check encoder state
    // encode() runs async, resolve transform() promise once done
    return new Promise(resolve => {
      this.encodedCallback = resolve;
      // Skipped: check need to encode frame as key frame
      this.encoder.encode(frame, { … });
      frame.close();
    });
  }
});



if (chunk instanceof RTCEncodedAudioFrame) {
  // 音频数据
  console.log('RTCEncodedAudioFrame:', chunk);
  controller.enqueue(chunk);
}

if (chunk instanceof RTCEncodedVideoFrame && chunk.type != 'empty') {
  console.log('RTCEncodedVideoFrame:', chunk);
  //  视频数据
  const mvideoDecoder = new VideoDecoder({
    output: (frame) => {
      controller.enqueue(frame);
      // frame.close();
      console.log('output-frame:', frame, 'chunk:', chunk);
    },
    error: (e: any) => {
      // 错误重新连接
      // if (this.options.hanelerErrorChange) {
      //   this.options.hanelerErrorChange(e);
      // }
      // this.mvideoDecoder.reset();
      // this._initVideoDecoder();
      this.options.logger.error(this.TAG, `decode frame error => ${e.toString()}`);
    },
  });

  mvideoDecoder.configure({
    // codec: 'hvc1.1.6.L150.b0',
    codec: 'avc1.42E01E',
    hardwareAcceleration: 'prefer-hardware',
  });

  // const frameType: any = this._isKeyframe(chunk);
  const fakeH264Data = new EncodedVideoChunk({
    // type: frameType ? 'key' : 'delta',
    type: chunk.type,
    data: chunk.data,
    timestamp: chunk.timestamp,
  });
  console.log('fakeH264Data:', fakeH264Data, 'chunk:', chunk);
  mvideoDecoder.decode(fakeH264Data);
}

// https://cloudgame.ds.163.com/g/dtws-page/index.html#/dtws?utm_source=cloudgame&p=eyJkdXJhdGlvbmx2IjoxfQ%3D%3D

function getQueryObject() {
  let url = window.location.href;

  let urlStr = url.split("?")[1];
  const urlSearchParams = new URLSearchParams(urlStr);
  const result = Object.fromEntries(urlSearchParams.entries());

  return result;

}
var query = getQueryObject()
console.log("query:",query)
var obj = JSON.parse(atob(decodeURIComponent(query.p)))
console.log("obj:",obj)

// webrtc 生成的数据是 MediaStream, 是直接添加到 video.src上， 如果要在 player 解码 ，需要 canvas 转一层。
// 本地加载 h265视频，查看很多资料，都是使用  MP4Box库进行处理，主要解析文件中视频。 我们是解析 webrtc中视频流。




// 将视频流渲染到canvas上
function handleVideoFrame2ArrayBuffer(videoFrame) {
  const imageBitmap = await createImageBitmap(videoFrame);
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height);
  const pixelData = imageData.data;
  // 将像素数据转换为Uint8Array
  const uint8Array = new Uint8Array(pixelData);
  // 将Uint8Array转换为ArrayBuffer
  const arrayBuffer = uint8Array.buffer;
  return arrayBuffer
}
/**
 * VideoFrame是WebCodecs API中表示视频帧数据的格式，
 * 而ArrayBuffer是JavaScript中表示二进制数据的格式。
 * 它们之间的主要区别在于VideoFrame是用于表示视频帧数据的高级对象，
 * 而ArrayBuffer是用于存储二进制数据的底层数据类型。
 * 
 * 要将VideoFrame转换为ArrayBuffer，通常需要从VideoFrame中提取像素数据，并将其存储到ArrayBuffer中。这涉及将像素数据转换为二进制格式，并存储到ArrayBuffer中。具体的转换方法取决于视频帧数据的格式和存储方式
 */

function handleDownloadWebRtcChunks() {
  // 初始化一个空的数组用于存储视频数据
  var videoDataArray = [];
  // 遍历window.webrtcChunks中的数据
  for (let i = 0; i < window.webrtcChunks.length; i++) {
    if (window.webrtcChunks[i] instanceof RTCEncodedVideoFrame) {
      videoDataArray.push(window.webrtcChunks[i].data);
    }
  }
  console.log('videoDataArray:', videoDataArray);
  // 创建一个Blob对象，保持顺序
  var mergedData = new Blob(videoDataArray, { type: 'video/webm' });

  // 创建下载链接
  var url = URL.createObjectURL(mergedData);

  // 创建一个<a>标签
  var a = document.createElement('a');
  a.href = url;
  a.download = 'video.webm';
  a.style.display = 'none';
  document.body.appendChild(a);

  // 触发点击事件自动下载
  a.click();

  // 释放URL对象
  URL.revokeObjectURL(url);
}