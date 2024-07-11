const decoderWorker = new Worker('./VideoDecoderWorker.js');

// 监听worker发送的消息
decoderWorker.addEventListener('message', (event) => {
  const frame = event.data;
  console.log('Received frame from worker:', frame);
  requestAnimationFrame(()=>{
     // 进一步渲染
  })
});

// 向worker发送数据
const data = new Uint8Array(/* ... */);

// appendSource 方法中发送 postMessage消息
decoderWorker.postMessage(data);