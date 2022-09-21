import { Router as ExpressRouter } from 'express'

import { RoutesResolver } from 'src/main/routes';
import ExpressRouterAdapter from './express-router-adapter';

export default (routesResolver: RoutesResolver) => {
  const router = new ExpressRouterAdapter(ExpressRouter());

  routesResolver(router);

  return router;
}
