import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebTransportService } from './web-transport.service';
import { CreateWebTransportDto } from './dto/create-web-transport.dto';
import { UpdateWebTransportDto } from './dto/update-web-transport.dto';

@Controller('web-transport')
export class WebTransportController {
  constructor(private readonly webTransportService: WebTransportService) {}

  @Post()
  create(@Body() createWebTransportDto: CreateWebTransportDto) {
    return this.webTransportService.create(createWebTransportDto);
  }

  @Get()
  findAll() {
    return this.webTransportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webTransportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebTransportDto: UpdateWebTransportDto) {
    return this.webTransportService.update(+id, updateWebTransportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webTransportService.remove(+id);
  }
}
