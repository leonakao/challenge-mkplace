import Product from 'src/modules/products/entity/product';
import AddProductRepository from '../../repositories/add-product-repository';
import AddProductUseCase, { AddProductData } from '../add-product-use-case';

export default class AddProductUseCaseImplementation implements AddProductUseCase {
  public readonly repository: AddProductRepository;

  constructor(repository: AddProductRepository) {
    this.repository = repository;
  }

  async execute(productData: AddProductData): Promise<Product> {
    const {
      price,
    } = productData;

    if (price < 0) {
      throw new Error('Invalid price');
    }

    return this.repository.execute(productData);
  }
}
