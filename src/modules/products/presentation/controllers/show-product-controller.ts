import { Controller, Request, Response } from 'src/modules/shared/presentation';
import { inject, injectable } from 'tsyringe';
import ShowProductUseCase from '../../domain/use-cases/show-product-use-case';

@injectable()
export default class AddProductController implements Controller {
  constructor(
    @inject('ShowProductUseCase')
    private readonly showProductUseCase: ShowProductUseCase,
  ) {}

  async handle(request: Request): Promise<Response> {
    const { slug = '' } = request.params();

    const product = await this.showProductUseCase.execute(slug);

    return {
      statusCode: 200,
      body: {
        ...product,
      },
    }
  }
}
