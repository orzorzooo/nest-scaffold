import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class MapService {
  constructor(private readonly http: HttpService) {}
  create(createMapDto: CreateMapDto) {
    return 'This action adds a new map';
  }

  findAll() {
    return `This action returns all map`;
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }

  async passNISC({ lon, lat, radius }): Promise<any> {
    const url = `https://api.nlsc.gov.tw/other/MarkBufferAnlys/bus/${lon}/${lat}/${radius}`;
    const res = await this.http.axiosRef.get(url);
    return res.data;
  }

  async passNISC_v2({ type, lon, lat, radius }): Promise<any> {
    const url = `https://api.nlsc.gov.tw/other/MarkBufferAnlys/${type}/${lon}/${lat}/${radius}`;
    const res = await this.http.axiosRef.get(url);
    return res.data;
  }
}
