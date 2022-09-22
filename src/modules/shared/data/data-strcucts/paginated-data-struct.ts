export default interface PaginatedDataStruct<T> {
  data: T[];
  total: number;
  perPage: number;
  page: number;
  totalPages: number;
}
