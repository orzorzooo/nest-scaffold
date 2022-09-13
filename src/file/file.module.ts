import { Module, Global } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SequelizeModule } from '@nestjs/sequelize';
import * as nuid from 'nuid'; // npm i nuid
import * as fs from 'fs';
import { File } from './entities/file.entity';

// @Global()
@Module({
  imports: [
    MulterModule.register({
      // 簡易指定存檔路徑
      // dest: './uplods/',
      storage: diskStorage({
        // destination: `uploads/`,
        destination: function (req, file, callback) {
          // req 帶 type (多態關聯用的，放到type相關路徑下)
          const { type, path } = req.body;
          const filepath = `uploads${type ? '/' + type : ''}${
            path ? '/' + path : ''
          }`;
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
    SequelizeModule.forFeature([File]),
  ],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
