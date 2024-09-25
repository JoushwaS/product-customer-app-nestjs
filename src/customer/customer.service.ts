import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../customer-service/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: createDto,
    });
  }

  async update(id: number, updateDto: UpdateCustomerDto) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return this.prisma.customer.update({
      where: { id },
      data: updateDto,
    });
  }

  async findAll() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }
}
