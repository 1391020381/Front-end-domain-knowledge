import { Test, TestingModule } from '@nestjs/testing';
import { WebTransportService } from './web-transport.service';

describe('WebTransportService', () => {
  let service: WebTransportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebTransportService],
    }).compile();

    service = module.get<WebTransportService>(WebTransportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
