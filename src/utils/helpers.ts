/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  constructor() {}

  public async sendObjectResponse(
    message: string,
    data?: any,
  ): Promise<{ message: string; data?: any }> {
    return {
      message,
      data,
    };
  }
}
