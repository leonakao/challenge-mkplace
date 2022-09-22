import { Model, PaginateModel } from 'mongoose';
import { container } from 'tsyringe';

import ProductRepository from 'src/modules/products/domain/repositories/product-repository';
import ProductRepositoryImplementation from 'src/modules/products/data/repositories/product-repository.implementation';
import productModel, { ProductDocument } from 'src/modules/products/data/models/product-model';
import AddProductUseCaseImplementation from 'src/modules/products/domain/use-cases/implementations/add-product-use-case.implementation';
import AddProductUseCase from 'src/modules/products/domain/use-cases/add-product-use-case';
import UniqueProductRule from 'src/modules/products/domain/rules/unique-product';
import ListProductsUseCase from 'src/modules/products/domain/use-cases/list-products-use-case';
import ListProductsUseCaseImplementation from 'src/modules/products/domain/use-cases/implementations/list-products-use-case.implementation';

container.register<ProductRepository>(
  'ProductRepository',
  { useClass: ProductRepositoryImplementation },
)

container.register<PaginateModel<ProductDocument>>(
  Model<ProductDocument>,
  { useValue: productModel },
)

container.register<AddProductUseCase>(
  'AddProductUseCase',
  { useClass: AddProductUseCaseImplementation },
)
container.register<ListProductsUseCase>(
  'ListProductsUseCase',
  { useClass: ListProductsUseCaseImplementation },
)

container.register<UniqueProductRule>(
  'UniqueProductRule',
  { useClass: UniqueProductRule },
)

container.register<Router>('Router', { useClass: ExpressRouterAdapter });
