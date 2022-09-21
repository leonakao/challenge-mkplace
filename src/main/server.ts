import { config as dotenvConfig } from 'dotenv';
import 'reflect-metadata';
import 'src/infra/container';
import MongoDatabaseAdapter from 'src/infra/database/mongo-database-adapter';
import App from './app';
import ErrorHandler from './error-handler';
import routesResolver from './routes';

export default function start(app: App): void {
  dotenvConfig();

  app.setDatabase(
    new MongoDatabaseAdapter(process.env.MONGO_URI as string),
  );

  app.setRoutes(routesResolver);

  app.setErrorHandler(new ErrorHandler());

  app.start(parseInt(process.env.SERVER_PORT, 10) || 3333);
}
