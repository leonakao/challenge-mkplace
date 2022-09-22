import Product from 'src/modules/products/entity/product';
import { inject, injectable } from 'tsyringe';
import NotFoundError from '../../errors/not-found-error';
import ProductRepository from '../../repositories/product-repository';
import ShowProductUseCase from '../show-product-use-case';

@injectable()
export default class ShowProductUseCaseImplementation implements ShowProductUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: ProductRepository,
  ) {}

  async execute(productSlug: string): Promise<Product> {
    const product = await this.repository.findBySlug(productSlug);

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    return product;
  }
}
