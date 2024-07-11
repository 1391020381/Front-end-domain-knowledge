class WebTransportConnectionJS {
    constructor(url) {
      this.url = url;
      this.transport = null;
      this.maxAttempts = 5;
      this.currentAttempt = 0;
    }
  
    async connect(onFailed = null) {
      try {
        this.transport = new WebTransport(this.url);
        await this.transport.ready;
        console.log('Connection established.');
        this.handleConnectionClosed();
        this.handleIncomingStreams();
        this.currentAttempt = 0; // Reset attempts after successful connection
      } catch (error) {
        console.error('Failed to establish connection:', error);
        if (this.currentAttempt < this.maxAttempts) {
          this.currentAttempt++;
          setTimeout(() => this.connect(onFailed), this.currentAttempt * 1000);
        } else if (onFailed) {
          onFailed(error);
        }
      }
    }
  
    async disconnect() {
      if (this.transport) {
        await this.transport.close({code: 1000, reason: 'Client initiated close.'});
        console.log('Connection closed.');
      }
    }
  
    handleConnectionClosed() {
      this.transport.closed.then(() => {
        console.log('Connection closed by server or due to network failure.');
        // Optionally, automatically reconnect here or notify the application layer
      });
    }
  
    async sendData(data) {
      if (!this.transport) {
        console.error('Transport is not established.');
        return;
      }
  
      try {
        const writer = this.transport.writable.getWriter();
        const encoder = new TextEncoder();
        await writer.write(encoder.encode(data));
        writer.releaseLock();
      } catch (error) {
        console.error('Failed to send data:', error);
      }
    }
  
    handleIncomingStreams() {
      this.transport.incomingUnidirectionalStreams.then(async (stream) => {
        const reader = stream.getReader();
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            reader.releaseLock();
            break;
          }
          // Handle received data
          const decoder = new TextDecoder();
          console.log('Received data:', decoder.decode(value));
        }
      }).catch((error) => {
        console.error('Failed to receive stream:', error);
      });
    }
  }


  const webTransportConnection = new WebTransportConnectionJS('wss://example.com/webtransport');

webTransportConnection.connect((error) => {
  console.error('Failed to connect after several attempts:', error);
});

// 发送数据
webTransportConnection.sendData('Hello, server!');

// 接收数据在 `handleIncomingStreams` 方法中处理