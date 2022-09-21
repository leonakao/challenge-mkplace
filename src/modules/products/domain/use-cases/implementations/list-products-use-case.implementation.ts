import Product from 'src/modules/products/entity/product';
import { inject, injectable } from 'tsyringe';
import ProductRepository from '../../repositories/product-repository';
import ListProductsUseCase, { ListOptions } from '../list-products-use-case';

@injectable()
export default class ListProductsUseCaseImplementation implements ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: ProductRepository,
  ) {}

  async execute(listOptions: ListOptions): Promise<Product[]> {
    const {
      perPage = 10,
      page = 1,
    } = listOptions;

    return this.repository.listProducts(perPage, page);
  }
}
