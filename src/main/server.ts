import { config as dotenvConfig } from 'dotenv';
import App from './app';
import routesResolver from './routes';

export default function start(app: App) {
  dotenvConfig();

  app.setRoutes(routesResolver);

  app.start(parseInt(process.env.SERVER_PORT, 10) || 3333);
}
