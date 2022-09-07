import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { where } from 'sequelize/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private user: typeof User,
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
    const user = await this.user.findOne({ where: { name } });

    // 避免找不到該使用者帳號的情形
    if (!user) return null;

    // bcrypt 比對使用者
    const isMatch = await bcrypt.compare(password, user.password ?? '');
    if (isMatch) {
      const token = await this.generateJWTToken(user);
      const { password, name, email } = user;
      return {
        code: 1,
        user: {
          name,
          email,
          avatar: '',
          position: '',
          roles: [],
          permissions: [],
          routes: [],
        },
        token,
      };
    }
    return null;
  }

  async getRoutes() {
    return [
      // {
      //   router: 'root',
      // },
    ];
  }

  async generateJWTToken(user: any) {
    const payload = { username: user.name, sub: user.id };
    const token = this.jwtService.sign(payload);
    return token;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const password = updateUserDto.password;
    updateUserDto.password = bcrypt.hashSync(password, 10);
    try {
      const user = await this.user.update(updateUserDto, { where: { id } });
      return user[0];
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.user.findAll();
  }

  findOne(id: number) {
    return this.user.findOne({
      where: { id },
    });
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
