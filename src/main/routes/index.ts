import { container } from 'tsyringe';
import Router from '../router';
import productRoutes from './products'

export type RoutesResolver = () => Router;

export default () => {
  const router: Router = container.resolve('Router');

  router.extends('/products', productRoutes());

  return router;
}
