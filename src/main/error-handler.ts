import { Response } from 'src/modules/shared/presentation';
import { ValidationError } from 'yup';

export interface IErrorHandler {
  handle(error: Error): Response;
}

export interface ICommonError{
  statusCode: number;
  message: string;
}

export default class ErrorHandler implements IErrorHandler {
  handle(error: Error|ValidationError|ICommonError): Response {
    if (error instanceof ValidationError) {
      error as ValidationError;
      return {
        statusCode: 422,
        body: {
          message: error.message,
          errors: error.inner.reduce((acc, curr) => {
            acc[curr.path] = curr.errors

            return acc;
          }, {}),
        },
      }
    }

    const statusCode = (error as ICommonError).statusCode || 500;

    return {
      statusCode,
      body: {
        message: error.message || 'Internal server error',
      },
    }
  }
}
