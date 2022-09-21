import Product from '../../entity/product';
import { AddProductData } from '../use-cases/add-product-use-case';

export default interface AddProductRepository {
  addProduct(product: AddProductData): Promise<Product>;
}
