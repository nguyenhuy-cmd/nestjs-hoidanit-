import { Controller, Delete, Get } from '@nestjs/common';

@Controller("user")
export class UserController {
  
  @Get()// GET => "/" === /user
   findAll(): string{
    return "Tôi tên là Huy"
  }

  @Get("/by-id") // Get => user/by-id 
  findByIg(): string{
    return "Tôi đã xóa tất cả"
  }
}
