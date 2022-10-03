import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { PropertyModule } from './property/property.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { File } from './file/entities/file.entity';
import { IotModule } from './iot/iot.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/uploads'),
      exclude: ['/api*'],
    }),
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: `${process.env.DATABASE_HOST}`,
      port: parseInt(`${process.env.DATABASE_PORT}`),
      username: `${process.env.DATABASE_USER}`,
      password: `${process.env.DATABASE_PASSWORD}`,
      database: `${process.env.DATABASE}`,
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    PropertyModule,
    IotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
