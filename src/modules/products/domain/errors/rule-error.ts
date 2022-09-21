export default class RuleError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = 'RuleError';
    this.statusCode = 422;
  }
}
