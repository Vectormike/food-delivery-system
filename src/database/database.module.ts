import 'dotenv/config';
import { Module, Global } from '@nestjs/common';
import OrderModel from './models/order.model';
import LogModel from './models/log.model';
import BaseModel from './models/base.model';
import CalculatedOrderModel from './models/calculatedOrder.model';
import OrderTotalAmountHistory from './models/orderTotalAmountHistory.model';
import { ObjectionModule } from '@willsoto/nestjs-objection';

@Global()
@Module({
  imports: [
    ObjectionModule.register({
      Model: BaseModel,
      config: {
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
        pool: {
          min: 2,
          max: 10,
        },
        migrations: {
          tableName: 'knex_migrations',
        },
      },
    }),
    ObjectionModule.forFeature([
      OrderModel,
      LogModel,
      CalculatedOrderModel,
      OrderTotalAmountHistory,
    ]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
