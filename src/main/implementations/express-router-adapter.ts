import { Request as ExpressRequest, Response as ExpressResponse, Router as ExpressRouter } from 'express';
import Controller from 'src/modules/shared/presentation/controller';
import { injectable } from 'tsyringe';
import ExpressRequestAdapter from './express-request-adapter';
import Router from '../router'

@injectable()
export default class ExpressRouterAdapter implements Router {
  private readonly expressRouter: ExpressRouter

  constructor() {
    this.expressRouter = ExpressRouter();
  }

  get(path: string, controller: Controller): void {
    this.expressRouter.get(path, async (request: ExpressRequest, response: ExpressResponse) => {
      const httpResponse = await controller.handle(new ExpressRequestAdapter(request))
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }

  post(path: string, controller: Controller): void {
    this.expressRouter.post(path, async (request: ExpressRequest, response: ExpressResponse) => {
      const httpResponse = await controller.handle(new ExpressRequestAdapter(request))
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }

  put(path: string, controller: Controller): void {
    this.expressRouter.put(path, async (request: ExpressRequest, response: ExpressResponse) => {
      const httpResponse = await controller.handle(new ExpressRequestAdapter(request))
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }

  delete(path: string, controller: Controller): void {
    this.expressRouter.delete(path, async (request: ExpressRequest, response: ExpressResponse) => {
      const httpResponse = await controller.handle(new ExpressRequestAdapter(request))
      response.status(httpResponse.statusCode).json(httpResponse.body)
    })
  }

  extends(path: string, router: Router): void {
    this.expressRouter.use(path, (router as ExpressRouterAdapter).expressRouter)
  }

  getExpressRouter(): ExpressRouter {
    return this.expressRouter
  }
}
