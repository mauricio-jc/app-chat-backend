import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  name: 'default',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: ['error', 'warn'],
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
