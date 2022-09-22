import AddProductController from 'src/modules/products/presentation/controllers/add-product-controller';
import ListProductsController from 'src/modules/products/presentation/controllers/list-products-controller';
import { container } from 'tsyringe';
import Router from '../../router';

export default (router: Router) => {
  router.post('/', container.resolve(AddProductController));
  router.get('/', container.resolve(ListProductsController));

  return router;
}
