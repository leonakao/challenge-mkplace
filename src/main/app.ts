import { RoutesResolver } from './routes';

export default interface App {
  start(): void;

  setRoutes(routerResolver: RoutesResolver): void;
}
