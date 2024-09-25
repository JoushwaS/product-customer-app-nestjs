import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerDto, CreateProductDto } from './dto';

@Controller()
export class AppController {
  constructor(
    @Inject('CUSTOMER_SERVICE') private customerClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
  ) {}

  @Post('customer')
  createCustomer(@Body() data: CreateCustomerDto) {
    return this.customerClient.send({ cmd: 'create_customer' }, data);
  }

  @Post('product')
  createProduct(@Body() data: CreateProductDto) {
    return this.productClient.send({ cmd: 'create_product' }, data);
  }

  @Get('most-bought-products')
  getMostBoughtProducts() {
    return this.productClient.send({ cmd: 'most_bought_products' }, {});
  }
}
