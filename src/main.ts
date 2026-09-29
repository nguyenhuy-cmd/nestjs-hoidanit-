import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));// Có thể truy cập đc js, css
  app.setBaseViewsDir(join(__dirname, '..', 'view'));//view
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
