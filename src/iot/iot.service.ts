import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIotDto } from './dto/create-iot.dto';
import { UpdateIotDto } from './dto/update-iot.dto';
import { Iot } from './entities/iot.entity';

@Injectable()
export class IotService {
  @InjectModel(Iot) private iot: typeof Iot;
  create(createIotDto: CreateIotDto) {
    return this.iot.create(createIotDto);
    return 'This action adds a new iot';
  }

  findAll() {
    return `This action returns all iot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iot`;
  }

  update(id: number, updateIotDto: UpdateIotDto) {
    return `This action updates a #${id} iot`;
  }

  remove(id: number) {
    return `This action removes a #${id} iot`;
  }
}
