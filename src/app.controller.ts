import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID as uuid } from 'node:crypto';
import { PrismaService } from '.';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: uuid(),
        content: 'Voce tem uma nova solicitação de amizade',
        category: 'social',
        recipientId: uuid(),
      },
    });
  }
}
