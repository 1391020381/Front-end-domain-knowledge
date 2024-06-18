import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WebTransportModule } from './web-transport/web-transport.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    WebTransportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
