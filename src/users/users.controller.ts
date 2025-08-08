import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async all(): Promise<User[]> {
    return await this.service.all();
  }

  @Get(':uuid')
  async find(@Param('uuid') uuid: string): Promise<User> {
    return await this.service.findOneBy('uuid', uuid);
  }

  @Post('create')
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return await this.service.create(dto);
  }
}
