import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { PrismaService } from '../src/prisma/prisma.service';

@Module({
  imports: [CustomerModule, ProductModule],
  providers: [PrismaService],
})
export class AppModule {}
