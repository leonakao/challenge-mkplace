import { Model } from 'mongoose';
import { inject, injectable } from 'tsyringe';
import AddProductRepository from '../../domain/repositories/add-product-repository';
import { AddProductData } from '../../domain/use-cases/add-product-use-case';
import Product from '../../entity/product';
import { productMapper } from '../mapper/product-mapper';
import { ProductDocument } from '../models/product-model';

@injectable()
export default class ProductRepositoryImplementation implements AddProductRepository {
  constructor(
    @inject(Model<ProductDocument>)
    private productModel: Model<ProductDocument>,
  ) {}

  async addProduct(product: AddProductData): Promise<Product> {
    const productDocument = await this.productModel.create(product);

    return productMapper(productDocument);
  }
}
