const slugify = (str: string, separator = '-') => str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, separator)
  .replace(/^-+|-+$/g, '');

export default slugify;
