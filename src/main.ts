import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: /.+/ });

  const appEnv = process.env.APP_ENV;

  if (appEnv !== 'development') app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Football Fantasy API')
    .setDescription('Football Fantasy API Documentation')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('dev/documentation', app, document);
  await app.listen(3000);
}
bootstrap();
