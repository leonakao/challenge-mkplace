import { Model } from 'mongoose';
import AddProductRepository from '../../domain/repositories/add-product-repository';
import { AddProductData } from '../../domain/use-cases/add-product-use-case';
import Product from '../../entity/product';
import { productMapper } from '../mapper/product-mapper';
import { ProductDocument } from '../models/product-model';

export default class ProductRepositoryImplementation implements AddProductRepository {
  private productModel: Model<ProductDocument>;

  constructor(productModel: Model<ProductDocument>) {
    this.productModel = productModel;
  }

  async addProduct(product: AddProductData): Promise<Product> {
    const productDocument = await this.productModel.create(product);

    return productMapper(productDocument);
  }
}
