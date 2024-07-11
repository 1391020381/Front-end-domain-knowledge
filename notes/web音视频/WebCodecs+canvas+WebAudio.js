// 1. 根据设备压力自适应FPS
let lastTime = performance.now();
let fps = 60;
let frameDuration = 1000 / fps;

function adaptiveFPS() {
    const now = performance.now();
    const elapsed = now - lastTime;

    if (elapsed > frameDuration) {
        // 更新FPS
        fps = Math.min(fps + 1, 60); // 增加FPS
        frameDuration = 1000 / fps;
        lastTime = now;
    } else {
        fps = Math.max(fps - 1, 30); // 降低FPS
    }

    requestAnimationFrame(adaptiveFPS);
}

adaptiveFPS();

// 解码异常时自动恢复
const codecReset = new VideoDecoder({
    output: handleFrame,
    error: (e) => {
        console.error(e);
        // 尝试重新初始化解码器
        codecReset.reset();
    }
});

function handleFrame(frame) {
    // 处理解码后的帧
}

// 逐帧播放 超快倍速播放
let playbackRate = 1.0;

function setPlaybackRate(rate) {
    playbackRate = rate;
}

function playFrameByFrame() {
    if (playbackRate === 1.0) {
        requestAnimationFrame(playFrameByFrame);
    } else {
        setTimeout(playFrameByFrame, 1000 / (fps * playbackRate));
    }

    // 渲染帧
}

playFrameByFrame();


// 低延迟场景buffer控制


const audioContext = new AudioContext();
let sourceBuffer = null;

function initBufferControl() {
    sourceBuffer = audioContext.createBufferSource();
    // 设置 buffer 控制
    sourceBuffer.buffer = audioBuffer;
    sourceBuffer.connect(audioContext.destination);
    sourceBuffer.start();
}

function adjustBufferSize(size) {
    // 调整 buffer 大小
    sourceBuffer.buffer = new AudioBuffer({
        length: size,
        sampleRate: audioContext.sampleRate
    });
}

initBufferControl();


// codec.reset() 方法主要用于重置解码器的内部状态。
// 这通常包括清除缓冲区 重置解码器的内部计数器等。
// 执行完之后，你需要重新配置解码器并重新开始解码。
// 具体来说 codec.reset() 会停止当前解码器的所有操作，并将其重置为初始状态。 这意味着你需要重新设置解码器的输出处理程序和输入程序。


let codec;

function initDecoder() {
    codec = new VideoDecoder({
        output: handleFrame,
        error: (e) => {
            console.error(e);
            // 尝试重新初始化解码器
            codec.reset();
            initDecoder();
        }
    });

    // 设置解码器的解码配置
    codec.configure({
        codec: 'vp8',
        codedWidth: 640,
        codedHeight: 480
    });
}

function handleFrame(frame) {
    // 处理解码后的帧
    console.log('Decoded frame:', frame);
}

function feedDecoder(data) {
    // 将数据馈送到解码器
    const chunk = new EncodedVideoChunk({
        type: 'key',
        timestamp: 0,
        data: data
    });
    codec.decode(chunk);
}

// 初始化解码器
initDecoder();

// 示例数据
const exampleData = new Uint8Array([/* 视频数据 */]);

// 将数据馈送到解码器
feedDecoder(exampleData);