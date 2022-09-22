import PaginatedDataStruct from '../../../shared/domain/data-structs/paginated-data-struct';
import Product from '../../entity/product';

export type ProductsFilterOptions = {
  name?: string;
  brand?: string;
  seller?: string;
  priceRange?: {
    min: number;
    max: number;
  }
}

export type ListOptions<T> = {
  perPage?: number,
  page?: number,
  filters?: T,
}

export default interface ListProductsUseCase {
  execute(listOptions: ListOptions<ProductsFilterOptions>): Promise<PaginatedDataStruct<Product>>;
}
