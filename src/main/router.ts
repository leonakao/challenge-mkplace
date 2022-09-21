import Controller from 'src/modules/shared/presentation/controller';

export default interface Router {
  get (path: string, controller: Controller): void;
  post (path: string, controller: Controller): void;
  put (path: string, controller: Controller): void;
  delete (path: string, controller: Controller): void;
  extends (path: string, router: Router): void;
}
