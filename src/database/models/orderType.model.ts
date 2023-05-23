import BaseModel from './base.model';

export default class OrderType extends BaseModel {
  static tableName = 'order_types';
  name: string;
}
