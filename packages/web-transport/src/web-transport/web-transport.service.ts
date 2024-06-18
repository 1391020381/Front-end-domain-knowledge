import { Injectable } from '@nestjs/common';
import { CreateWebTransportDto } from './dto/create-web-transport.dto';
import { UpdateWebTransportDto } from './dto/update-web-transport.dto';

@Injectable()
export class WebTransportService {
  create(createWebTransportDto: CreateWebTransportDto) {
    return 'This action adds a new webTransport';
  }

  findAll() {
    return `This action returns all webTransport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webTransport`;
  }

  update(id: number, updateWebTransportDto: UpdateWebTransportDto) {
    return `This action updates a #${id} webTransport`;
  }

  remove(id: number) {
    return `This action removes a #${id} webTransport`;
  }
}
