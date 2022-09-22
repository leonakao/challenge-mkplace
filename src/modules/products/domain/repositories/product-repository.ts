import PaginatedDataStruct from 'src/modules/shared/domain/data-structs/paginated-data-struct';
import Product from '../../entity/product';
import { AddProductData } from '../use-cases/add-product-use-case';

export default interface ProductRepository {
  addProduct(product: AddProductData): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  listProducts(perPage: number, page: number): Promise<PaginatedDataStruct<Product>>;
}
