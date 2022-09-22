import Product from '../../entity/product';

export default interface ShowProductUseCase {
  execute(productSlug: string): Promise<Product>;
}
