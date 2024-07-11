// 假设已经设置了pc.ontrack事件处理程序
pc.ontrack = event => {
    const videoElement = document.getElementById('video'); // 获取video元素
  
    // 创建VideoDecoder实例
    const decoder = new VideoDecoder(event.track.codec); // 根据codec创建decoder
  
    let chunks = []; // 用于存储收到的视频帧数据
  
    // 处理收到的数据块
    event.track.onreceive(chunk => {
      chunks.push(chunk); // 将数据块保存到chunks数组中
  
      // 当积累了一定数量的数据块时尝试解码和渲染
      if (chunks.length >= DECODING_THRESHOLD) {
        decodeAndRenderChunks(chunks, decoder, videoElement);
        chunks = []; // 清空已处理的chunks数组
      }
    });
  };
  
  // 解码并渲染视频帧数据
  function decodeAndRenderChunks(chunks, decoder, videoElement) {
    const readableStream = new ReadableStream({
      start(controller) {
        chunks.forEach(chunk => controller.enqueue(chunk));
        controller.close();
      }
    });
  
    const reader = readableStream.getReader();
  
    reader.read().then(({ value, done }) => {
      if (done) return;
  
      const decodedFrame = decoder.decode(value); // 解码视频帧
      videoElement.srcObject = decodedFrame; // 将解码后的帧设置为video元素的srcObject
  
      return reader.read();
    }).then(({ value, done }) => {
      if (!done) {
        // 继续解码剩余的帧
        return decodeAndRenderChunks([value], decoder, videoElement);
      }
    }).catch(error => console.error('Error decoding video:', error));
  }