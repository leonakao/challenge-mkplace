import Request from 'src/modules/shared/presentation/request';
import { Request as ExpressRequest } from 'express';

export default class ExpressRequestAdapter implements Request {
  private readonly _request: ExpressRequest;

  constructor(request: ExpressRequest) {
    this._request = request;
  }

  body(): Record<string, unknown> {
    return this._request.body;
  }

  params(): Record<string, unknown> {
    return this._request.params;
  }

  query(): Record<string, unknown> {
    return this._request.query;
  }
}
