import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize/types';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private company: typeof Company) {}
  create(createCompanyDto: CreateCompanyDto) {
    return this.company.create(createCompanyDto);
  }

  findAll() {
    return this.company.findAll();
  }

  findOne(id: number) {
    return this.company.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.company.update(updateCompanyDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.company.destroy({ where: { id } });
  }
}
