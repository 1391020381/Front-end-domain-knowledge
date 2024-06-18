import { Test, TestingModule } from '@nestjs/testing';
import { WebTransportController } from './web-transport.controller';
import { WebTransportService } from './web-transport.service';

describe('WebTransportController', () => {
  let controller: WebTransportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebTransportController],
      providers: [WebTransportService],
    }).compile();

    controller = module.get<WebTransportController>(WebTransportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
