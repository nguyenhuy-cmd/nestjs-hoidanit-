import { Injectable } from '@nestjs/common';

//Decorators: người trang trí
@Injectable()
export class AppService {
  getHello(): string {
    //model: code
    return 'Hello World Huy!';
  }
}
