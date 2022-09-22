import Product from 'src/modules/products/entity/product';
import { inject, injectable } from 'tsyringe';
import RuleError from '../../errors/rule-error';
import ProductRepository from '../../repositories/product-repository';
import UniqueProductRule from '../../rules/unique-product';
import AddProductUseCase, { AddProductData } from '../add-product-use-case';

@injectable()
export default class AddProductUseCaseImplementation implements AddProductUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: ProductRepository,
    @inject('UniqueProductRule')
    private uniqueProductRule: UniqueProductRule,
  ) {}

  async execute(productData: AddProductData): Promise<Product> {
    const {
      name,
    } = productData;

    if (!await this.uniqueProductRule.execute(name)) {
      throw new RuleError('Product already exists');
    }

    return this.repository.addProduct(productData);
  }
}
