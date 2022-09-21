import AddProductController from 'src/modules/products/presentation/controllers/add-product-controller';
import { container } from 'tsyringe';
import Router from '../../router';

export default (router: Router) => {
  router.post('/', container.resolve(AddProductController));

  return router;
}
