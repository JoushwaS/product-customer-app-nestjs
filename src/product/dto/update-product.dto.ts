import { IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends CreateProductDto {
  @IsString()
  productName?: string;

  @IsOptional()
  productPrice?: number;

  @IsOptional()
  productStock?: number;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  category?: string;
}
