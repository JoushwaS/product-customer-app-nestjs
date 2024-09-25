import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // Create a new product
  async createProduct(data) {
    return this.prisma.product.create({
      data,
    });
  }

  // Update an existing product by ID
  async updateProduct(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  // Get the most bought products based on customer purchases
  async getMostBoughtProducts() {
    return this.prisma.product.findMany({
      orderBy: {
        // Assumes you have a field like `salesCount` or `purchaseCount`
        purchaseCount: 'desc',
      },
      take: 10, // Get top 10 most bought products
    });
  }

  // Calculate the percentage of products bought by customers from each category
  async getCustomerPreferences(customerId: number) {
    const totalPurchasesByCustomer = await this.prisma.order.aggregate({
      where: {
        customerId,
      },
      _count: {
        _all: true,
      },
    });

    const purchasesGroupedByCategory = await this.prisma.order.groupBy({
      by: ['productCategory'],
      where: {
        customerId,
      },
      _count: {
        productCategory: true,
      },
    });

    return purchasesGroupedByCategory.map((category) => ({
      category: category.productCategory,
      percentage:
        (category._count.productCategory /
          totalPurchasesByCustomer._count._all) *
        100,
    }));
  }

  // Get the product that has been bought the most
  async getMostBoughtProduct() {
    return this.prisma.product.findFirst({
      orderBy: {
        purchaseCount: 'desc', // Assuming you track product purchases with a `purchaseCount`
      },
    });
  }

  // Get the favorite product of a customer based on purchases
  async getCustomerFavoriteProduct(customerId: number) {
    const favoriteProduct = await this.prisma.order.groupBy({
      by: ['productId'],
      where: { customerId },
      _count: {
        productId: true,
      },
      orderBy: {
        _count: {
          productId: 'desc',
        },
      },
      take: 1, // Get the most frequently bought product
    });

    return favoriteProduct.length > 0
      ? await this.prisma.product.findUnique({
          where: { id: favoriteProduct[0].productId },
        })
      : null;
  }
}
