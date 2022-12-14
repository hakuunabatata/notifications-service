import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID as uuid } from 'node:crypto';
import { PrismaService } from '.';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const id = uuid();

    await this.prisma.notification.create({
      data: {
        id,
        content,
        category,
        recipientId,
      },
    });
  }
}
