export class CreateProductDto {
  productName: string;
  productPrice: number;
  productStock: number;
  productActive: boolean;
  productCategory: string;
}

export class UpdateProductDto {
  id: number;
  productName?: string;
  productPrice?: number;
  productStock?: number;
  productActive?: boolean;
  productCategory?: string;
}
