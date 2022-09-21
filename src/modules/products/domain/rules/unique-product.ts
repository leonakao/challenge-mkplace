import ProductRepository from 'src/modules/products/domain/repositories/product-repository';
import { inject, injectable } from 'tsyringe'

@injectable()
export default class UniqueProductRule {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepository,
  ) {}

  async execute(name: string): Promise<boolean> {
    const product = await this.productRepository.findByName(name);

    return product === null;
  }
}
