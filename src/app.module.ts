import { Module } from '@nestjs/common';
import { AppController, PrismaService } from '.';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
