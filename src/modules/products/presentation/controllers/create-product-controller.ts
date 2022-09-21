import { Controller, Request, Response } from 'src/modules/shared/presentation';

class CreateProductController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(request: Request): Promise<Response> {
    return {
      statusCode: 201,
      body: {
        message: 'Product created successfully',
      },
    }
  }
}

export default new CreateProductController();
