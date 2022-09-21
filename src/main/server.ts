import { config as dotenvConfig } from 'dotenv';
import MongoDatabaseAdapter from 'src/infra/database/mongo-database-adapter';
import App from './app';
import routesResolver from './routes';

export default function start(app: App): void {
  dotenvConfig();

  app.setDatabase(
    new MongoDatabaseAdapter(process.env.MONGO_URI as string),
  );

  app.setRoutes(routesResolver);

  app.start(parseInt(process.env.SERVER_PORT, 10) || 3333);
}
