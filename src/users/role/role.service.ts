import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private role: typeof Role) {}

  create(createRoleDto: CreateRoleDto) {
    return this.role.create(createRoleDto);
  }

  findAll() {
    return this.role.findAll();
  }

  findOne(id: number) {
    return this.role.findOne({ where: { id } });
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.role.update(updateRoleDto, { where: { id } });
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return this.role.destroy({ where: { id } });
    return `This action removes a #${id} role`;
  }
}
