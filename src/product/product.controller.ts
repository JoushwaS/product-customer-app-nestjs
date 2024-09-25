import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Create a new product
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  // Update a product by ID
  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  // Get the most bought products (top 10)
  @Get('most-bought')
  async getMostBoughtProducts() {
    return this.productService.getMostBoughtProducts();
  }

  // Get the most bought product overall
  @Get('most-bought-product')
  async getMostBoughtProduct() {
    return this.productService.getMostBoughtProduct();
  }

  // Get customer preferences based on their purchase history
  @Get('customer-preferences')
  async getCustomerPreferences(
    @Query('customerId', ParseIntPipe) customerId: number,
  ) {
    return this.productService.getCustomerPreferences(customerId);
  }

  // Get a customer's favorite product based on their purchase history
  @Get('customer-favorite')
  async getCustomerFavoriteProduct(
    @Query('customerId', ParseIntPipe) customerId: number,
  ) {
    return this.productService.getCustomerFavoriteProduct(customerId);
  }
}
