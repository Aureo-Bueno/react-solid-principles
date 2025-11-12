import { AxiosRequestConfig } from "axios";

export interface IHttp {
  get<T>(url: string, config?: AxiosRequestConfig<any>): Promise<T>;
  post<T>(url: string, body: any, config?: AxiosRequestConfig<any>): Promise<T>;
  put<T>(url: string, body: any, config?: AxiosRequestConfig<any>): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig<any>): Promise<T>;
}
