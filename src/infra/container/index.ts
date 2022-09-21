import { Model } from 'mongoose';
import { container } from 'tsyringe';

import AddProductRepository from 'src/modules/products/domain/repositories/add-product-repository';
import ProductRepositoryImplementation from 'src/modules/products/data/repositories/product-repository.implementation';
import productModel, { ProductDocument } from 'src/modules/products/data/models/product-model';
import AddProductUseCaseImplementation from 'src/modules/products/domain/use-cases/implementations/add-product-use-case.implementation';
import AddProductUseCase from 'src/modules/products/domain/use-cases/add-product-use-case';

container.register<AddProductRepository>(
  'AddProductRepository',
  { useClass: ProductRepositoryImplementation },
)

container.register(
  Model<ProductDocument>,
  { useValue: productModel },
)

container.register<AddProductUseCase>(
  'AddProductUseCase',
  { useClass: AddProductUseCaseImplementation },
)
