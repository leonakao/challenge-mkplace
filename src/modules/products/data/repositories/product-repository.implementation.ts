import { Model } from 'mongoose';
import PaginatedDataStruct from 'src/modules/shared/domain/data-strcucts/paginated-data-struct';
import { inject, injectable } from 'tsyringe';
import ProductRepository from '../../domain/repositories/product-repository';
import { AddProductData } from '../../domain/use-cases/add-product-use-case';
import Product from '../../entity/product';
import productMapper from '../mapper/product-mapper';
import { ProductDocument } from '../models/product-model';

@injectable()
export default class ProductRepositoryImplementation implements ProductRepository {
  constructor(
    @inject(Model<ProductDocument>)
    private productModel: Model<ProductDocument>,
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

  async listProducts(perPage: number, page: number): Promise<PaginatedDataStruct<Product>> {
    const options = {
      page,
      limit: perPage,
    };

    const productsPaginated = await this.productModel
      .paginate({}, options);

    return {
      data: productsPaginated.docs.map(productMapper),
      total: productsPaginated.totalDocs,
      perPage: productsPaginated.limit,
      page: productsPaginated.page,
      totalPages: productsPaginated.totalPages,
    }
  }
}
