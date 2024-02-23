export type Pagination<T = object> = {
  data: T[];
  paginationToken: string | null;
};

export type PaginationInput = {
  paginationToken?: string | null;
  limit?: number | null;
};
