import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize/types';
import { FileService } from '../file/file.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property) private property: typeof Property,
    private fileService: FileService,
  ) {}
  create(createPropertyDto: CreatePropertyDto) {
    console.log(createPropertyDto);
    return this.property.create(createPropertyDto);
  }

  findAll() {
    return this.property.findAll();

    // return `This action returns all property`;
  }

  async findOne(id: string) {
    const property: any = await this.property.findOne({
      where: { id },
      raw: true,
    });
    property.price = property.price.split(',');
    property.spec = property.spec ?? null;
    return property;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    console.log(updatePropertyDto);
    return this.property.update(updatePropertyDto, {
      where: { id },
    });

    // return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return this.property.destroy({ where: { id } });
    // return `This action removes a #${id} property`;
  }
}
