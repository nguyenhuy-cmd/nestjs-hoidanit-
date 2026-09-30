import { config } from 'dotenv';
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService  
  ) { }

  @Get() 
  @Render("home")
  handleHomePage() {

    // cổng từ .env
    console.log(`>>>> Check port: ${this.configService.get<string>("PORT")}`);
    
    const message = this.appService.getHello();
    return {
      message: message
    }
  }
  @Get("abc")
  getHello1(): string{
    return "Đây là abc"
  }
}
