export interface ApiResponse<T> {
  ok: boolean;
  messages: any;
  data: T;
}

export interface ApiResponseList<T> {
  ok: boolean;
  messages: any;
  data: T[];
}
