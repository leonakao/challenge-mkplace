import { Controller, Request, Response } from 'src/modules/shared/presentation';
import { inject, injectable } from 'tsyringe';
import AddProductUseCase, { AddProductData } from '../../domain/use-cases/add-product-use-case';
import addProductValidation from '../validations/add-product-validation';

@injectable()
export default class AddProductController implements Controller {
  constructor(
    @inject('AddProductUseCase')
    private readonly addProductUseCase: AddProductUseCase,
  ) {}

  async handle(request: Request): Promise<Response> {
    const addProductData = await addProductValidation.validate(request.body(), {
      abortEarly: false,
    }) as AddProductData;

    const product = await this.addProductUseCase.execute(addProductData);

    return {
      statusCode: 201,
      body: {
        ...product,
      },
    }
  }
}
