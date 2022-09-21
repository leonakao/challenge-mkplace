import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import bodyParser from 'body-parser';

import App from 'src/main/app';
import { RoutesResolver } from 'src/main/routes';
import expressRouter from './express-router';

class ExpressApp implements App {
  public readonly express: express.Application;

  constructor() {
    this.express = express();
  }

  start(): void {
    this.express.listen(3333, () => {
      // eslint-disable-next-line no-console
      console.log('Server started on port 3333!');
    });
  }

  setRoutes(routesResolver: RoutesResolver): void {
    const router = expressRouter(routesResolver);

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
