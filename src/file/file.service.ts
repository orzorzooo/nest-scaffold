import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(@InjectModel(File) private file: typeof File) {}
  async create(files, type = null, fileable_id = null) {
    console.log('file', files);
    try {
      files.forEach(async (file) => {
        const createFileData = {
          name: file.filename,
          url: file.path,
          mimetype: `${file.mimetype.split('/')[1]}`,
          type: type ? type : '',
          user_id: 0,
          fileable_id,
        };
        const result = await this.file.create(createFileData);
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async upload(file, type = null, fileable_id = null) {
    const createFileData = {
      name: file.filename,
      url: file.path,
      mimetype: `${file.mimetype.split('/')[1]}`,
      type: type ? type : '',
      user_id: 0,
      fileable_id,
    };
    const result = await this.file.create(createFileData);
    return result;
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
