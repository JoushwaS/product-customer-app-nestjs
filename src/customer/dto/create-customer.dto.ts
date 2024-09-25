import { IsEmail, IsNotEmpty, Matches, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Matches(/^\d{16}$/, { message: 'Card number must be 16 digits' })
  cardNumber: string;

  @IsString()
  phoneNumber: string;
}
