import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize/types';
import { FileService } from '../file/file.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { PropertyModule } from './property.module';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property) private property: typeof Property,
    private fileService: FileService,
  ) {}
  create(createPropertyDto: CreatePropertyDto) {
    return this.property.create(createPropertyDto);
  }

  findAll() {
    return this.property.findAll();

    // return `This action returns all property`;
  }

  async findOne(id: string) {
    return await this.property.findOne({ where: { id }, raw: true });
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
