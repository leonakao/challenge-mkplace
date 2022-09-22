export default (object: object) => Object.fromEntries(
  Object
    .entries(object)
    .filter(
      ([, value]) => value !== undefined,
    ),
);
