import { Module } from '@nestjs/common';
import { WebTransportService } from './web-transport.service';
import { WebTransportController } from './web-transport.controller';

@Module({
  controllers: [WebTransportController],
  providers: [WebTransportService],
})
export class WebTransportModule {}
