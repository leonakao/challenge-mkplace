import Product from '../../entity/product';
import { AddProductData } from '../use-cases/add-product-use-case';

export default interface AddProductRepository {
  execute(product: AddProductData): Promise<Product>;
}
