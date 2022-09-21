import addProductController from 'src/modules/products/presentation/controllers/add-product-controller';
import Router from '../../router';

export default (router: Router) => {
  router.post('/', addProductController);

  return router;
}
