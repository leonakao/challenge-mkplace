import 'reflect-metadata';
import express, { Response, Router } from 'express';
import cors from 'cors';
import 'express-async-errors';
import bodyParser from 'body-parser';

import App from 'src/main/app';
import { RoutesResolver } from 'src/main/routes';
import ExpressRouterAdapter from './express-router-adapter';
import Database from '../database';
import { IErrorHandler } from '../error-handler';

class ExpressApp implements App {
  public readonly express: express.Application;

  constructor() {
    this.express = express();
  }

  start(port: number): void {
    this.express.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server started on port ${port}!`);
    });
  }

  setRoutes(routesResolver: RoutesResolver): void {
    const router = routesResolver();

    this.express.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );

    this.express.use(express.json());

    this.express.use(cors());

    this.express.use((router as ExpressRouterAdapter).getExpressRouter());
  }

  async setDatabase(database: Database): Promise<void> {
    return database.connect();
  }

  setErrorHandler(handler: IErrorHandler): void {
    this.express.use((err, _, expressResponse: Response, __) => {
      const response = handler.handle(err);

      expressResponse.status(response.statusCode).json(response.body);
    });
  }
}

export default new ExpressApp();
