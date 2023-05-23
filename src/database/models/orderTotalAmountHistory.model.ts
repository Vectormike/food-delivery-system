import { RelationMappings, RelationMappingsThunk, Model } from 'objection';
import BaseModel from './base.model';
import BrandModel from './log.model';

export default class OrderTotalAmountHistory extends BaseModel {
  static tableName = 'order_total_amount_history';

  time: Date;
  total_amount: number;

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    brand: {
      modelClass: BrandModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'categories.brand_id',
        to: 'brands.id',
      },
    },
  };
}
