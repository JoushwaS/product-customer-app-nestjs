export class CreateCustomerDto {
  name: string;
  email: string;
  cardNumber: string;
  phoneNumber: string;
}

export class UpdateCustomerDto {
  id: number;
  name?: string;
  email?: string;
  cardNumber?: string;
  phone?: string;
}
