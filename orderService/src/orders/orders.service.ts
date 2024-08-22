import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.order.create({ data });
  }

  async findAll() {
    return this.prisma.order.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findFirst({
      where: { id, deletedAt: null },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  async update(id: number,data) {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order || order.deletedAt) {
      throw new NotFoundException(`Order with ID ${data.id} not found`);
    }

    return await this.prisma.order.update({
      where:{id},
      data
    });
  }

  async remove(id: number) {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order || order.deletedAt) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
