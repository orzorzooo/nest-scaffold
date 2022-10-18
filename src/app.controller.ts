import {
  Controller,
  Get,
  Post,
  Request,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtAuthGuard } from './users/auth/jwt-auth.guard';
import { Public } from './users/auth/public.decorator';
import { Roles } from './users/role/roles.decorator';
import { RolesGuard } from './users/role/roles.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rtest')
  @UseGuards(RolesGuard)
  @Roles('admin', 'user')
  roleTest() {
    return 'ok';
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @Public()
  async login(@Request() req) {
    return req.user;
  }

  // @UseGuards(AuthGuard('jwt'))
  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
