import BaseModel from './base.model';

export default class LogModel extends BaseModel {
  static tableName = 'logs';

  time: Date;
  description: string;

}
