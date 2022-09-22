import { Model, PaginateModel } from 'mongoose';
import { inject, injectable } from 'tsyringe';
import filterObject from 'src/modules/shared/utils/filter-object';
import PaginatedDataStruct from '../../../shared/domain/data-structs/paginated-data-struct';
import { ProductsFilterOptions } from '../../domain/use-cases/list-products-use-case';
import ProductRepository from '../../domain/repositories/product-repository';
import { AddProductData } from '../../domain/use-cases/add-product-use-case';
import Product from '../../entity/product';
import productMapper from '../mapper/product-mapper';
import { ProductDocument } from '../models/product-model';

@injectable()
export default class ProductRepositoryImplementation implements ProductRepository {
  constructor(
    @inject(Model<ProductDocument>)
    private productModel: PaginateModel<ProductDocument>,
  ) {}

  async addProduct(product: AddProductData): Promise<Product> {
    const productDocument = await this.productModel.create(product);

    return productMapper(productDocument);
  }

  async findByName(name: string): Promise<Product | null> {
    const productDocument = await this.productModel.findOne({ name });

    if (!productDocument) {
      return null;
    }

    return productMapper(productDocument);
  }

  async listProducts(perPage: number, page: number, filters: ProductsFilterOptions):
    Promise<PaginatedDataStruct<Product>> {
    const options = {
      page,
      limit: perPage,
    };

    const productsPaginated = await this.productModel
      .paginate(filterObject({
        name: filters.name ? { $regex: filters.name, $options: 'i' } : undefined,
        brand: filters.brand ? { $regex: filters.brand, $options: 'i' } : undefined,
        seller: filters.seller ? { $regex: filters.seller, $options: 'i' } : undefined,
      }), options);

    return {
      data: productsPaginated.docs.map(productMapper),
      total: productsPaginated.totalDocs,
      perPage: productsPaginated.limit,
      page: productsPaginated.page,
      totalPages: productsPaginated.totalPages,
    }
  }
}
