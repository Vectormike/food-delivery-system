export interface Orders {
  order: Order;
  logs: Log[];
  calculated_order: CalculatedOrder;
  order_type: OrderType;
  order_total_amount_history: OrderTotalAmountHistory;
}

export interface Order {
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
  scheduled: boolean;
  confirmed_by_id: string | null;
  completed_by_id: string | null;
  scheduled_delivery_date: Date | null;
  scheduled_delivery_time: Date | null;
  is_hidden: boolean;
}

export interface OrderTotalAmountHistory {
  time: Date;
  total_amount: number;
}

export interface Log {
  time: Date;
  description: string;
}

export interface OrderType {
  name: string;
}

export interface CalculatedOrder {
  total_amount: string;
  free_delivery: boolean;
  delivery_fee: string;
  service_charge: string;
  address_details: AddressDetails;
  meals: Meal[];
  amount: number;
  internal_profit: number;
}

export interface AddressDetails {
  city: string;
  name: string;
  address_line: string;
  building_number: string;
}

export interface Meal {
  new: boolean;
  name: string;
  brand: {
    name: string;
  };
  active: boolean;
  addons: MealAddon[];
}

interface MealAddon {
  amount: number;
  meal_id: string;
  meal_data: {
    name: string;
    active: boolean;
    amount: string;
    brand_id: string;
    item_type: string;
  };
  meal_addon_id: string;
  internal_profit: number;
  min_selection_no: string;
  meal_addon_category_id: string;
}
