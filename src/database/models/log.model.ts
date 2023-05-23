import { RelationMappings, RelationMappingsThunk, Model } from 'objection';
import BaseModel from './base.model';
import UserModel from './calculatedOrder.model';

export default class LogModel extends BaseModel {
  static tableName = 'logs';

  time: Date;
  description: string;

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    owner: {
      modelClass: UserModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'brands.owner_id',
        to: 'users.id',
      },
    },
  };
}
