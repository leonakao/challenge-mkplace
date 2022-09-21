import Router from '../router';
import productRoutes from './products'

export type RoutesResolver = (router: Router) => Router;

export default (router: Router) => {
  router.extends('/products', productRoutes(router));

  return router;
}
