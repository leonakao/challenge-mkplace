import PaginatedDataStruct from 'src/modules/shared/domain/data-structs/paginated-data-struct';
import Product from '../../entity/product';
import { AddProductData } from '../use-cases/add-product-use-case';
import { ProductsFilterOptions } from '../use-cases/list-products-use-case';

export interface AddProductDataRepository extends AddProductData {
  slug: string;
}

export default interface ProductRepository {
  addProduct(product: AddProductDataRepository): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  listProducts(perPage: number, page: number, filters: ProductsFilterOptions):
    Promise<PaginatedDataStruct<Product>>;
}
