class WebTransportConnection {
    private url: string;
    private transport: WebTransport | null = null;
    private maxAttempts: number = 5;
    private currentAttempt: number = 0;
  
    constructor(url: string) {
      this.url = url;
    }
  
    async connect(onFailed?: (error: any) => void): Promise<void> {
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
  
    async disconnect(): Promise<void> {
      if (this.transport) {
        await this.transport.close({code: 1000, reason: 'Client initiated close.'});
        console.log('Connection closed.');
      }
    }
  
    private handleConnectionClosed(): void {
      this.transport?.closed.then(() => {
        console.log('Connection closed by server or due to network failure.');
        // Optionally, automatically reconnect here or notify the application layer
      });
    }
  
    async sendData(data: string): Promise<void> {
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
  
    private handleIncomingStreams(): void {
      this.transport?.incomingUnidirectionalStreams.then(async (streams) => {
        for await (const stream of streams) {
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
        }
      }).catch((error) => {
        console.error('Failed to receive stream:', error);
      });
    }
  }