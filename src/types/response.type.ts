export type Response<T> = {
  success: boolean;
  response?: T;
  status: number;
};
