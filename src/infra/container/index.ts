import { Model, PaginateModel } from 'mongoose';
import { container } from 'tsyringe';

import Router from '../../main/router';
import ExpressRouterAdapter from '../../main/implementations/express-router-adapter';
import ProductRepositoryImplementation from '../../modules/products/data/repositories/product-repository.implementation';
import productModel, { ProductDocument } from '../../modules/products/data/models/product-model';
import AddProductUseCaseImplementation from '../../modules/products/domain/use-cases/implementations/add-product-use-case.implementation';
import AddProductUseCase from '../../modules/products/domain/use-cases/add-product-use-case';
import UniqueProductRule from '../../modules/products/domain/rules/unique-product';
import ListProductsUseCase from '../../modules/products/domain/use-cases/list-products-use-case';
import ListProductsUseCaseImplementation from '../../modules/products/domain/use-cases/implementations/list-products-use-case.implementation';
import ShowProductUseCase from '../../modules/products/domain/use-cases/show-product-use-case';
import ShowProductUseCaseImplementation from '../../modules/products/domain/use-cases/implementations/show-product-use-case.implementation';
import ProductRepository from '../../modules/products/domain/repositories/product-repository';

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
container.register<ShowProductUseCase>(
  'ShowProductUseCase',
  { useClass: ShowProductUseCaseImplementation },
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
