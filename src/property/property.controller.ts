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
  UploadedFiles,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from '../file/file.service';

@Controller('property')
export class PropertyController {
  constructor(
    private readonly propertyService: PropertyService,
    private fileService: FileService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async create(
    @Body() createPropertyDto: CreatePropertyDto,
    @UploadedFiles() files,
  ) {
    const property = await this.propertyService.create(createPropertyDto);
    if (property) {
      console.log('fuck', files);
      const uploadFile = await this.fileService.create(
        files,
        'property',
        property.id,
      );
      if (!uploadFile) {
        return {
          uploadFile: false,
          property: true,
        };
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const files = await this.fileService.find(id, 'property');
    const property: any = await this.propertyService.findOne(id);
    property.files = files;
    return property;
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
