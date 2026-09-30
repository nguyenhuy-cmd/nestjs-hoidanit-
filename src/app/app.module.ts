import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UsersModule } from '../users/users.module';

// Đây còn gọi là root
@Module({
  imports: [
    // 1. Load file .env trước
    ConfigModule.forRoot({
      isGlobal: true// dùng để biến một module thành Module toàn cục (Global Module).
    }),
    // 2. Kết nối với database 'nest-mongoDB' ở local
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),// Giúp: Bảo mật tuyệt đối (Không lộ tài khoản DB), Chuyển môi trường linh hoạt mà không cần sửa code, tránh lỗi khởi động (Xử lý bất đồng bộ)
    // 3. Import UsersModule vào đây!
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
