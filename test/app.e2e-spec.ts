import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('POST /order', () => {
    it('should create a new order', () => {
      const createOrderDTO = {
        // provide the necessary order details for testing
      };

      return request(app.getHttpServer())
        .post('/order')
        .send(createOrderDTO)
        .expect(201)
        .expect((res) => {
          // add any assertions for the response body
          expect(res.body.message).toBe('Order created successfully');
          expect(res.body.data).toHaveProperty('id');
          // assert other properties as needed
        });
    });
  });

  describe('GET /order', () => {
    it('should get all orders', () => {
      return request(app.getHttpServer())
        .get('/order')
        .expect(200)
        .expect((res) => {
          // add any assertions for the response body
          expect(res.body.message).toBe('Orders retrieved successfully');
          expect(Array.isArray(res.body.data)).toBe(true);
          // assert other properties as needed
        });
    });
  });

  describe('GET /order/highest-quantity-meal', () => {
    it('should get the meal with the highest quantity', () => {
      return request(app.getHttpServer())
        .get('/order/highest-quantity-meal')
        .expect(200)
        .expect((res) => {
          // add any assertions for the response body
          expect(res.body.message).toBe(
            'Highest quantity meal retrieved successfully',
          );
          expect(res.body.data).toHaveProperty('mealName');
          expect(res.body.data).toHaveProperty('quantity');
          // assert other properties as needed
        });
    });
  });
});
