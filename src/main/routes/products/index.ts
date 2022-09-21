import createProductController from 'src/modules/products/presentation/controllers/create-product-controller';
import Router from '../../router';

export default (router: Router) => {
  router.post('/', createProductController);

  return router;
}
