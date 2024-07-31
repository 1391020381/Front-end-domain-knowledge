// https://webrtchacks.com/web-%E4%B8%8A%E7%9A%84%E8%A7%86%E9%A2%91%E5%B8%A7%E5%A4%84%E7%90%86-webassembly%E3%80%81webgpu%E3%80%81webgl%E3%80%81webcodecs%E3%80%81webnn-%E5%92%8C-webtransport/#post-4024-_velcradjb42o

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
           // controller.enqueue(configChunk);
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