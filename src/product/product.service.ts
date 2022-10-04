import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private product: typeof Product) {}
  create(createProductDto: CreateProductDto) {
    return this.product.create(createProductDto);
    return 'This action adds a new product';
  }

  findAll() {
    return this.product.findAll({});
    return `This action returns all product`;
  }

  findOne(id: number) {
    return this.product.findOne({ where: { id } });
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.product.update(updateProductDto, { where: { id } });
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return this.product.destroy({ where: { id } });
    return `This action removes a #${id} product`;
  }
}
