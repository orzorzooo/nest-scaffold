import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import * as fs from 'fs';

@Injectable()
export class FileService {
  constructor(@InjectModel(File) private file: typeof File) {}
  async create(files, type = null, fileable_id = null) {
    console.log('file', files);
    try {
      files.forEach(async (file) => {
        const url = `${file.path}`.replace('uploads/', '');
        console.log('path', url);
        const createFileData = {
          name: file.filename,
          url,
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
    console.log('createFile', file);
    const createFileData = {
      name: file.filename,
      url: file.path,
      // mimetype: `${file.mimetype.split('/')[1]}`,
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

  find(id: string, type: string) {
    return this.file.findAll({
      where: {
        type,
        fileable_id: id,
      },
      raw: true,
    });
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  async remove(id: number) {
    const item = await this.file.findOne({ where: { id } });
    console.log(item);
    await fs.unlink(`./uploads/${item.url}`, (err) => {});
    return this.file.destroy({ where: { id } });
  }
}
