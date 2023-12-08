import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalprefix = 'api';
  app.setGlobalPrefix(globalprefix);

  const port = 3000;
  await app.listen(port);
}
bootstrap();
