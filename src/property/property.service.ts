import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from '../file/file.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { PropertyModule } from './property.module';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property) private property: typeof Property,
    private fileService: FileService,
  ) {}
  create(createPropertyDto: CreatePropertyDto) {
    return this.property.create(createPropertyDto);
  }

  findAll() {
    return [
      {
        name: '景觀套房',
        categoryID: '',
        des: '近東門站套房/生活機能超棒/家具可溝通',
        spec: '套雅房 4 房',
        price: 'NT$11000~11000 / 月',
        area: '台南市東區',
        img: 'https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        address: '708台南市安平區永華路二段2號',
      },
      {
        name: '景觀套房',
        categoryID: '',
        des: '近東門站套房/生活機能超棒/家具可溝通',
        spec: '套雅房 4 房',
        price: 'NT$11000~11000 / 月',
        area: '台南市東區',
        img: 'https://images.pexels.com/photos/6527043/pexels-photo-6527043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        address: '708台南市安平區永華路二段2號',
      },
      {
        name: '景觀套房',
        categoryID: '',
        des: '近東門站套房/生活機能超棒/家具可溝通',
        spec: '套雅房 4 房',
        price: 'NT$11000~11000 / 月',
        area: '台南市東區',
        img: 'https://images.pexels.com/photos/7939863/pexels-photo-7939863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        address: '708台南市安平區永華路二段2號',
      },
      {
        name: '景觀套房',
        categoryID: '',
        des: '近東門站套房/生活機能超棒/家具可溝通',
        spec: '套雅房 4 房',
        price: 'NT$11000~11000 / 月',
        area: '台南市東區',
        img: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        address: '708台南市安平區永華路二段2號',
      },
      {
        name: '景觀套房',
        categoryID: '',
        des: '近東門站套房/生活機能超棒/家具可溝通',
        spec: '套雅房 4 房',
        price: 'NT$11000~11000 / 月',
        area: '台南市東區',
        img: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        address: '708台南市安平區永華路二段2號',
      },
    ];
    // return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
