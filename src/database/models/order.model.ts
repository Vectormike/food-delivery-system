import { RelationMappings, RelationMappingsThunk, Model } from 'objection';
import BaseModel from './base.model';
import BrandModel from './log.model';

interface Log {
    time: Date;
    description: string;
}

interface OrderTotalAmount {
    time: Date;
    total_amount: number;
}

interface CalculatedOrder {
    total_amount: string;
    free_delivery: boolean;
    delivery_fee: string;
    service_charge: string;
    address_details: AddressDetails;
    meals: Meal[];
    amount: number;
    internal_profit: number;
}

export default class OrderModel extends BaseModel {
  static tableName = 'orders';

  user_id: string;
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchen_dispatched_time: Date;
  completed_time: Date;
  rider_id: string;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  order_code: string;
  order_change: string | null;
  calculated_order_id: string;
  created_at: Date;
  updated_at: Date;
  logs: Log[];
  kitchen_verified_time: Date;
  kitchen_completed_time: Date;
  shop_accepted: boolean;
  shop_prepared: boolean;
  no_of_mealbags_delivered: number;
  no_of_drinks_delivered: number;
  rider_started_time: Date | null;
  rider_started: boolean;
  rider_arrived_time: Date | null;
  rider_arrived: boolean;
  is_failed_trip: boolean;
  failed_trip_details: any; // Adjust the type based on the actual structure
  box_number: string;
  shelf_id: string | null;
  order_total_amount_history: OrderTotalAmount[];
  scheduled: boolean;
  confirmed_by_id: string | null;
  completed_by_id: string | null;
  scheduled_delivery_date: Date | null;
  scheduled_delivery_time: Date | null;
  is_hidden: boolean;
  calculated_order: CalculatedOrder;
  order_type: OrderType;

}
