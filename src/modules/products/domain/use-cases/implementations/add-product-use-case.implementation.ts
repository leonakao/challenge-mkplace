import Product from 'src/modules/products/entity/product';
import { inject, injectable } from 'tsyringe';
import AddProductRepository from '../../repositories/add-product-repository';
import AddProductUseCase, { AddProductData } from '../add-product-use-case';

@injectable()
export default class AddProductUseCaseImplementation implements AddProductUseCase {
  constructor(
    @inject('AddProductRepository')
    private repository: AddProductRepository,
  ) {}

  async execute(productData: AddProductData): Promise<Product> {
    const {
      price,
    } = productData;

    if (price < 0) {
      throw new Error('Invalid price');
    }

    return this.repository.addProduct(productData);
  }
}
