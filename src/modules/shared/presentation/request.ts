interface Request {
  body: () => object;
  params: () => object;
  query: () => object;
}

export default Request;
