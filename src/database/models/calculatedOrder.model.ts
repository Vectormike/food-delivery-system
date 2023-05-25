import { AddressDetails, Meal } from "src/order/order.interface";
import BaseModel from "./base.model";

export default class CalculatedOrderModel extends BaseModel {
  static tableName = 'calculated_orders';

  total_amount: string;
  free_delivery: boolean;
  delivery_fee: string;
  service_charge: string;
  address_details: AddressDetails;
  meals: Meal[];
  amount: number;
  internal_profit: number;
}