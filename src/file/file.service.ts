import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(@InjectModel(File) private file: typeof File) {}
  async create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }

  async upload(req, file) {
    const createFileData = {
      name: file.filename,
      url: file.path,
      mimetype: `${file.mimetype.split('/')[1]}`,
      description: req.description,
      type: req.type,
      user_id: 0,
      fileable_id: 0,
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
