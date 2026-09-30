import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

// Tác dụng của service là điều hướng xuống database
@Injectable()
export class UsersService {
  // Tiêm (Inject) User Model vào để có thể thao tác với MongoDB
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    // Tạo data thật và lưu xuống Database!
    const createdUser = new this.userModel({
      email: "thaygiao@gmail.com",
      name: "Thầy Giáo",
      age: 30
    });
    return await createdUser.save(); // Dòng này sẽ gọi MongoDB tạo database!
  }

  async findAll() {
    // Bonus: Hàm này lấy tất cả user trong database ra xem
    return await this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
