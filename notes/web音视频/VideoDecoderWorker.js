class VideoDecoderWorker {
    constructor() {
      this.codec = null;
    }
  
    initDecoder() {
      this.codec = new VideoDecoder({
        output: this.handleFrame.bind(this),
        error: (e) => {
          console.error(e);
          // 尝试重新初始化解码器
          this.codec.reset();
          this.initDecoder();
        },
      });
  
      // 设置解码器的解码配置
      this.codec.configure({
        codec: 'vp8',
        codedWidth: 640,
        codedHeight: 480,
      });
    }
  
    handleFrame(frame) {
      // 处理解码后的帧
      console.log('Decoded frame:', frame);
  
      // 向主线程发送消息
      self.postMessage(frame);
    }
  
    feedDecoder(data) {
                    // 需要进行解码处理
      // 将数据馈送到解码器
      const chunk = new EncodedVideoChunk({
        type: 'key',
        timestamp: 0,
        data: data,
      });
      this.codec.decode(chunk);
    }
  }
  
  // 监听主线程发送的消息
  self.addEventListener('message', (event) => {
    const data = event.data;
    const decoderManager = new VideoDecoderManager();
    decoderManager.initDecoder();
    decoderManager.feedDecoder(data);
  });