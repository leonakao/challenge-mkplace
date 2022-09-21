import { Model } from 'mongoose';
import { container } from 'tsyringe';

import AddProductRepository from 'src/modules/products/domain/repositories/add-product-repository';
import ProductRepositoryImplementation from 'src/modules/products/data/repositories/product-repository.implementation';
import productModel, { ProductDocument } from 'src/modules/products/data/models/product-model';

container.register<AddProductRepository>(
  'AddProductRepository',
  ProductRepositoryImplementation,
)

container.register(
  Model<ProductDocument>,
  productModel,
)
