// 假设有多个ArrayBuffer或TypedArray需要合并处理
let buffer1 = new Uint8Array([1, 2, 3]).buffer;
let buffer2 = new Uint8Array([4, 5, 6]).buffer;

// 合并多个ArrayBuffer或TypedArray
function mergeBuffers(buffers) {
    let totalLength = buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
    let mergedBuffer = new Uint8Array(totalLength);
    let offset = 0;
    buffers.forEach(buffer => {
        mergedBuffer.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
    });
    return mergedBuffer.buffer;
}

let combinedBuffer = mergeBuffers([buffer1, buffer2]);

// 让EncodedVideoChunk处理合并后的数据
let chunk = encodeVideoChunkFromBuffer(combinedBuffer);

// EncodedVideoChunk处理函数
function encodeVideoChunkFromBuffer(buffer) {
    // 假设EncodedVideoChunk的处理逻辑
    return buffer;
}

