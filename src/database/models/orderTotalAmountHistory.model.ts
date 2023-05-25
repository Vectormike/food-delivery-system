import BaseModel from './base.model';

export default class OrderTotalAmountHistory extends BaseModel {
  static tableName = 'order_total_amount_history';

  time: Date;
  total_amount: number;


}
