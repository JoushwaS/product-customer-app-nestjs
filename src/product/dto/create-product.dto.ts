import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;

  @IsNumber()
  productStock: number;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  category: string;
}
