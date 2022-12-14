import { Controller, Request, Response } from 'src/modules/shared/presentation';
import { inject, injectable } from 'tsyringe';
import ListProductsUseCase, { ListOptions, ProductsFilterOptions } from '../../domain/use-cases/list-products-use-case';

@injectable()
export default class ListProductsController implements Controller {
  constructor(
    @inject('ListProductsUseCase')
    private readonly listProductsUseCase: ListProductsUseCase,
  ) {}

  async handle(request: Request): Promise<Response> {
    const query = request.query();

    const listOptions: ListOptions<ProductsFilterOptions> = {
      perPage: query.perPage ? Number(query.perPage) : 10,
      page: query.page ? Number(query.page) : 1,
      filters: {
        name: query.name ? String(query.name) : undefined,
        brand: query.brand ? String(query.brand) : undefined,
        seller: query.seller ? String(query.seller) : undefined,
      },
    }

    const paginatedProducts = await this.listProductsUseCase.execute(
      listOptions,
    );

    return {
      statusCode: 201,
      body: {
        ...paginatedProducts,
      },
    }
  }
}
