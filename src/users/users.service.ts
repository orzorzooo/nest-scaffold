import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { HasMany, where } from 'sequelize/types';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private user: typeof User,
    @InjectModel(Role) private role: typeof Role,
    private readonly jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      // bcrypt加密使用者密碼
      const password = createUserDto.password;
      createUserDto.password = bcrypt.hashSync(password, 10);

      const user = await this.user.create(createUserDto);
      return user;
    } catch (error) {
      return error;
    }
  }

  // 驗證使用者
  async validateUser(name: string, password: string) {
    const user: any = await this.user.findOne({
      where: { name },
      include: [{ model: Role, attributes: ['name'] }],
    });
    // const role = await this.role.findOne({ where: { id: user.role_id } });

    // 避免找不到該使用者帳號的情形
    if (!user) return null;

    // bcrypt 比對使用者
    const isMatch = await bcrypt.compare(password, user.password ?? '');
    if (isMatch) {
      const token = await this.generateJWTToken(user);
      const { password, name, email, roles } = user;
      return {
        code: 1,
        user: {
          name,
          email,
          avatar: '',
          position: '',
          roles: roles.name,
          permissions: [],
          routes: [],
        },
        token,
      };
    }
    return null;
  }

  async getRoutes() {
    return [];
  }

  async generateJWTToken(user: any) {
    const payload = {
      username: user.name,
      sub: user.id,
      roles: user.roles,
      role_id: user.role_id,
    };
    const token = this.jwtService.sign(payload);
    return token;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const password = updateUserDto.password;
      updateUserDto.password = bcrypt.hashSync(password, 10);
    }

    try {
      const user = await this.user.update(updateUserDto, { where: { id } });
      return user[0];
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.user.findAll({
      include: [{ model: Role, attributes: ['name'] }],
    });
  }

  async findOne(id: number) {
    const user: any = await this.user.findOne({
      where: { id },
      include: [
        {
          model: Role,
          attributes: ['name'],
        },
      ],
      raw: true,
    });
    const { password, ...userData } = user;

    return userData;
  }

  findByName(name: string) {
    return this.user.findOne({
      where: {
        name,
      },
    });
  }

  async remove(id: number) {
    try {
      const user = await this.user.destroy({ where: { id } });
      return user;
    } catch (error) {
      return error;
    }
  }
}
