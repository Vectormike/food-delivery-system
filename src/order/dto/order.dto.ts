import { IsNotEmpty, IsOptional } from 'class-validator';

import {
  Order,
  Log,
  CalculatedOrder,
  OrderType,
  OrderTotalAmountHistory,
  AddressDetails,
  Meal,
} from '../order.interface';

export class CreateOrderDTO {
  @IsNotEmpty()
  readonly order: Order;

  @IsOptional()
  readonly logs: Log[];

  @IsOptional()
  readonly order_total_amount_history: OrderTotalAmountHistory[];

  @IsOptional()
  readonly address_details: AddressDetails;

  @IsOptional()
  readonly meals: Meal[];

  @IsOptional()
  readonly calculated_order: CalculatedOrder;

  @IsOptional()
  readonly order_type: OrderType;
}
