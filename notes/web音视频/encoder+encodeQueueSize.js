const MAX_QUEUE_SIZE = 10; // 设置最大队列大小阈值
let shouldProduceFrames = true; // 控制生产的标志位

async function decodeVideoFrame(videoFrame) {
  if (encoder.encodeQueueSize >= MAX_QUEUE_SIZE) {
    shouldProduceFrames = false; // 如果队列满了，暂停生产
    console.log('Encoder queue is full, pausing frame production.');
  } else {
    inputQueue.push(videoFrame);
    await processQueue();
  }
}

async function processQueue() {
  // ...（同前面的代码）

  // 在处理完队列后，检查是否可以恢复生产帧
  if (encoder.encodeQueueSize < MAX_QUEUE_SIZE / 2 && !shouldProduceFrames) {
    shouldProduceFrames = true;
    console.log('Encoder queue is not full, resuming frame production.');
  }
}