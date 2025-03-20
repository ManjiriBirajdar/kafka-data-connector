import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';

//select the Kafka transporter mechanism using the transport property of
// the options object passed to the createMicroservice() method, along with an optional 
//options property

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'digital-twin-reader',
          brokers: ['172.27.86.31:37621'],
          logLevel: logLevel.ERROR
        },
        consumer: {
          groupId: 'arxum',
        },
      },
    },
  );
  app.listen();
}
bootstrap();