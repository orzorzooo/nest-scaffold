import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '../file/file.service';

@Controller('property')
export class PropertyController {
  constructor(
    private readonly propertyService: PropertyService,
    private fileService: FileService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createPropertyDto: CreatePropertyDto,
    @UploadedFile() file,
  ) {
    const property = await this.propertyService.create(createPropertyDto);
    console.log(property);
    if (property) {
      await this.fileService.upload(file, 'property', property.id);
    }
    return property;
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
