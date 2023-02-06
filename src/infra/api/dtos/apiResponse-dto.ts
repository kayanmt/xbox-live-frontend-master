export type ApiResponse<T> = {
  statusCode: number;
  body: T;
  message?: string;
};
