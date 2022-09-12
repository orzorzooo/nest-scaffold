import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './entities/property.entity';
import * as nuid from 'nuid'; // npm i nuid
@Module({
  imports: [
    SequelizeModule.forFeature([Property]),
    MulterModule.register({
      storage: diskStorage({
        destination: `uploads/property`,
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
