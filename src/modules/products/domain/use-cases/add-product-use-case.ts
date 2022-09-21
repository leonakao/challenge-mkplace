import Product from '../../entity/product';

export type AddProductData = {
  name: string,
  brand: string,
  price: number,
  seller: string,
}

export default interface AddProductUseCase {
  execute(productData: AddProductData): Promise<Product>;
}
