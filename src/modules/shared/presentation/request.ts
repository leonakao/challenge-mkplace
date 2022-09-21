interface Request {
  body: () => Record<string, unknown>;
  params: () => Record<string, unknown>;
  query: () => Record<string, unknown>;
}

export default Request;
