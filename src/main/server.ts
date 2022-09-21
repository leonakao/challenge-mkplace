import App from './app';
import routesResolver from './routes';

export default function start(app: App) {
  app.setRoutes(routesResolver);

  app.start();
}
