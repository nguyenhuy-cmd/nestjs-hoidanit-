import { Injectable } from '@nestjs/common';

//Decorators: người trang trí
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Huy!';
  }
}
