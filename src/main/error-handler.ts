/* eslint-disable no-console */
import { Response } from 'src/modules/shared/presentation';

export interface IErrorHandler {
  handle(error: Error): Response;
}

export default class ErrorHandler implements IErrorHandler {
  handle(error: Error): Response {
    console.error(error);

    return {
      statusCode: 500,
      body: {
        message: 'Internal server error',
      },
    }
  }
}
