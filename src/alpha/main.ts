import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/alpha/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
console.log("8889");

  await app.listen(8887);

}
bootstrap();
