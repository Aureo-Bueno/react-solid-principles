import axios, { AxiosRequestConfig } from "axios";
import { IHttp } from "./http.interface";

class HttpClient implements IHttp {
  private axiosInstance = axios.create();

  constructor() {
    this.axiosInstance.defaults.headers.common["Content-Type"] =
      "application/json";

    this.axiosInstance.defaults.headers.common["Accept"] = "application/json";
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

export const httpClient = new HttpClient();
