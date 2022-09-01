import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({ usernameField: 'name' });
  }
  async validate(name: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(name, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
