import 'reflect-metadata';
import express, { Router } from 'express';
import cors from 'cors';
import 'express-async-errors';
import bodyParser from 'body-parser';

import App from 'src/main/app';
import { RoutesResolver } from 'src/main/routes';
import ExpressRouterAdapter from './express-router-adapter';

class ExpressApp implements App {
  public readonly express: express.Application;

  constructor() {
    this.express = express();
  }

  start(port: number): void {
    this.express.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log('Server started on port 3333!');
    });
  }

  setRoutes(routesResolver: RoutesResolver): void {
    const router = new ExpressRouterAdapter(Router());

    routesResolver(router);

    this.express.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );

    this.express.use(express.json());

    this.express.use(cors());

    this.express.use(router.getExpressRouter());
  }
}

export default new ExpressApp();
