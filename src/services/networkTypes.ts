export type ResponseError = {
  error: string,
  inputErrors?: {string: string}[]
}

export type ResponsePagination = {
  current: number,
  next: number,
  amount: number
}

export type NetworkResponse<T> = {
  payload: T,
  status: number,
  token?: string,
  pagination?: ResponsePagination
}
