import { Module } from '@nestjs/common';
import { IotService } from './iot.service';
import { IotController } from './iot.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Iot } from './entities/iot.entity';

@Module({
  imports: [SequelizeModule.forFeature([Iot])],
  controllers: [IotController],
  providers: [IotService],
})
export class IotModule {}
