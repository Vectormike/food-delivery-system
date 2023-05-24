import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsEmpty,
  IsOptional,
} from 'class-validator';

import {
  Log,
  CalculatedOrder,
  OrderType,
  OrderTotalAmountHistory,
} from '../order.interface';

export class OrderDTO {
  @IsNotEmpty()
  readonly user_id: string;

  @IsNotEmpty()
  readonly completed: boolean;

  @IsNotEmpty()
  readonly cancelled: boolean;

  @IsNotEmpty()
  readonly kitchen_cancelled: boolean;

  @IsNotEmpty()
  readonly kitchen_accepted: boolean;

  @IsNotEmpty()
  readonly kitchen_dispatched: boolean;

  @IsOptional()
  readonly kitchen_dispatched_time: Date;

  @IsOptional()
  readonly completed_time: Date;

  @IsNotEmpty()
  readonly rider_id: string;

  @IsNotEmpty()
  readonly kitchen_prepared: boolean;

  @IsNotEmpty()
  readonly rider_assigned: boolean;

  @IsNotEmpty()
  readonly paid: boolean;

  @IsNotEmpty()
  readonly order_code: string;

  @IsOptional()
  readonly order_change: string | null;

  @IsNotEmpty()
  readonly calculated_order_id: string;

  @IsNotEmpty()
  created_at: Date;

  @IsNotEmpty()
  updated_at: Date;

  @IsNotEmpty()
  readonly logs: Log[];

  @IsOptional()
  readonly kitchen_verified_time: Date;

  @IsOptional()
  readonly kitchen_completed_time: Date;

  @IsNotEmpty()
  readonly shop_accepted: boolean;

  @IsNotEmpty()
  readonly shop_prepared: boolean;

  @IsNotEmpty()
  readonly no_of_mealbags_delivered: number;

  @IsNotEmpty()
  readonly no_of_drinks_delivered: number;

  @IsOptional()
  readonly rider_started_time: Date | null;

  @IsNotEmpty()
  readonly rider_started: boolean;

  @IsOptional()
  readonly rider_arrived_time: Date | null;

  @IsNotEmpty()
  readonly rider_arrived: boolean;

  @IsNotEmpty()
  readonly is_failed_trip: boolean;

  @IsNotEmpty()
  readonly failed_trip_details: any;

  @IsNotEmpty()
  readonly box_number: string;

  @IsOptional()
  readonly shelf_id: string | null;

  @IsNotEmpty()
  readonly order_total_amount_history: OrderTotalAmountHistory[];

  @IsNotEmpty()
  readonly scheduled: boolean;

  @IsOptional()
  readonly confirmed_by_id: string | null;

  @IsOptional()
  readonly completed_by_id: string | null;

  @IsOptional()
  readonly scheduled_delivery_date: Date | null;

  @IsOptional()
  readonly scheduled_delivery_time: Date | null;

  @IsNotEmpty()
  readonly is_hidden: boolean;

  @IsNotEmpty()
  readonly calculated_order: CalculatedOrder;

  @IsNotEmpty()
  readonly order_type: OrderType;
}
