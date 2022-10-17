import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './entities/property.entity';
import * as nuid from 'nuid'; // npm i nuid
import * as fs from 'fs';
import { FileModule } from '../file/file.module';
import { join } from 'path';
// import { FileService } from 'src/file/file.service';
@Module({
  imports: [
    FileModule,
    SequelizeModule.forFeature([Property]),
    MulterModule.register({
      storage: diskStorage({
        destination: function (req, file, callback) {
          // req 帶 type (多態關聯用的，放到type相關路徑下)
          // const { type, path } = req.body;
          const filepath = join(__dirname, '..', '/uploads/property');
          fs.mkdirSync(filepath, { recursive: true });
          return callback(null, filepath);
        },
        //自定義檔名, 用nuid來處理檔名
        filename(req, file, callback) {
          const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
          return callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
