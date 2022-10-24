import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import axios, { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
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
    console.log(url);
    const res = await this.http.axiosRef.get(url);
    return res.data;
    // return this.http.axiosRef.get(
    //   `https://api.nlsc.gov.tw/other/MarkBufferAnlys/bus/${lon}/${lat}/${radius}`,
    // );
  }
}
