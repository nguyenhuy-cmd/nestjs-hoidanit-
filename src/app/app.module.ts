import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [// Kết nối với database 'nest-js-demo' ở local
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mongoDB'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
