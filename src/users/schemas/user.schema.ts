import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({required: true})// required là bắt buộc phải điền
  // // estJS và Mongoose biết biến bên dưới nó là một trường dữ liệu trong database.
  email:string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  createAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);