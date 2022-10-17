import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { isNotEmpty } from 'class-validator';
import { where } from 'sequelize/types';
import { File } from '../file/entities/file.entity';
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

  async findAll() {
    let properties: any = await this.property.findAll({ raw: true });
    // for (let item of properties) {
    //   const files = await this.fileService.find(item.id, 'property');
    //   console.log(files[0]);
    //   item.files = files;
    // }
    return properties;
  }

  async findOne(id: string) {
    const property: any = await this.property.findOne({
      where: { id },
      raw: true,
    });
    property.spec = property.spec ?? null;
    return property;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    console.log(updatePropertyDto);
    const result = await this.property.update(updatePropertyDto, {
      where: { id },
    });
    if (result) {
      return updatePropertyDto;
    } else {
      return 0;
    }
  }

  remove(id: number) {
    return this.property.destroy({ where: { id } });
    // return `This action removes a #${id} property`;
  }
}
