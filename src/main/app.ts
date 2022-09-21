import Database from './database';
import { RoutesResolver } from './routes';

export default interface App {
  start(port: number): void;

  setRoutes(routerResolver: RoutesResolver): void;

  setDatabase(database: Database): Promise<void>;
}
