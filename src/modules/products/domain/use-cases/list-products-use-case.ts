import Product from '../../entity/product';

export type ListOptions = {
  perPage?: number,
  page?: number,
}

export default interface ListProductsUseCase {
  execute(listOptions: ListOptions): Promise<Product[]>;
}
