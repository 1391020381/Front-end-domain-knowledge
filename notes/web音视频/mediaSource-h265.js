const updating = this.sourceBuffer?.updating === true;
const bufferQueueEmpty = this.bufferQueue.length === 0;

  if (!updating) {
    if (bufferQueueEmpty) {
      // 缓存队列为空: 仅消费本次 buffer
      this.appendBuffer(curBuffer);
    } else {
      // 缓存队列不为空: 消费队列 + 本次 buffer
      this.bufferQueue.push(curBuffer);

      // 队列中多个 buffer 的合并
      const totalBufferByteLen = this.bufferQueue.reduce(
        (pre, cur) => pre + cur.byteLength,
        0
      );
      const combinedBuffer = new Uint8Array(totalBufferByteLen);
      let offset = 0;
      this.bufferQueue.forEach((array, index) => {
        offset += index > 0 ? this.bufferQueue[index - 1].length : 0;
        combinedBuffer.set(array, offset);
      });

      this.appendBuffer(combinedBuffer);
      this.bufferQueue = [];
    }
  } else {
    // mse 还在消费上一次 buffer（处于 updating 中）， 缓存本次 buffer, 否则会有丢帧问题
    this.bufferQueue.push(curBuffer);
  }
