import { PartialType } from '@nestjs/mapped-types';
import { CreateWebTransportDto } from './create-web-transport.dto';

export class UpdateWebTransportDto extends PartialType(CreateWebTransportDto) {}
