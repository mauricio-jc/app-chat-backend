import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async all(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOneBy(key: any, value: any): Promise<User> {
    return await this.repository.findOne({
      where: {
        [key]: value,
      },
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    try {
      const user = await this.findOneBy('email', dto.email);

      if (user) {
        throw new BadRequestException('User already exist!');
      }

      dto.password = await bcrypt.hash(dto.password, 10);
      const created = this.repository.save(dto);
      return created;
    } catch (error) {
      throw error;
    }
  }
}
