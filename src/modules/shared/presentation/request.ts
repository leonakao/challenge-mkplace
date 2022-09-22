interface Request {
  body: () => Record<string, unknown>;
  params: () => Record<string, string|undefined>;
  query: () => Record<string, string|undefined>;
}

export default Request;
