import Product from 'src/modules/products/entity/product';
import PaginatedDataStruct from 'src/modules/shared/domain/data-structs/paginated-data-struct';
import { inject, injectable } from 'tsyringe';
import ProductRepository from '../../repositories/product-repository';
import ListProductsUseCase, { ListOptions, ProductsFilterOptions } from '../list-products-use-case';

@injectable()
export default class ListProductsUseCaseImplementation implements ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: ProductRepository,
  ) {}

  async execute(listOptions: ListOptions<ProductsFilterOptions>):
    Promise<PaginatedDataStruct<Product>> {
    const {
      perPage = 10,
      page = 1,
      filters,
    } = listOptions;

    return this.repository.listProducts(perPage, page, filters);
  }
}
