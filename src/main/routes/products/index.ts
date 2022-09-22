import { container } from 'tsyringe';
import AddProductController from '../../../modules/products/presentation/controllers/add-product-controller';
import ListProductsController from '../../../modules/products/presentation/controllers/list-products-controller';
import ShowProductController from '../../../modules/products/presentation/controllers/show-product-controller';
import Router from '../../router';

export default (router: Router) => {
  router.post('/', container.resolve(AddProductController));
  router.get('/', container.resolve(ListProductsController));
  router.get('/:slug', container.resolve(ShowProductController));

  return router;
}
