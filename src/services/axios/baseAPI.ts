import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { RESPONSE_CODE } from '../../common/constants';

interface BaseAPIOptions {
  config?: AxiosRequestConfig;
  headers?: AxiosRequestHeaders;
  timeout?: number;
  baseURL?: string;
}

export class BaseAPI {
  private axiosInstance: AxiosInstance;

  constructor(options?: BaseAPIOptions) {
    const TIMEOUT_NUMBER = 10000;

    const getTokenAPI = () => {
      const localStorageItem = localStorage.getItem('accessToken'); // Get accessToken form localStorage
      return localStorageItem ? { Authorization: 'Bearer ' + localStorageItem } : null;
    };

    this.axiosInstance = axios.create({
      ...options?.config,
      baseURL: options?.baseURL || process.env.API_URL,
      headers: {
        ...options?.headers,
        ...getTokenAPI()
      },
      timeout: options?.timeout || TIMEOUT_NUMBER
    });

    // Response interceptor for API calls
    this.axiosInstance.interceptors.response.use(
      response => {
        if (response && response.data) {
          return response.data;
        }
        return response;
      },
      error => {
        // Handle errors
        return Promise.reject(error);
      }
    );

    // Request interceptor for API calls
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  private async handleResponseData<T>(data?: any): Promise<AxiosResponse<T>> {
    if (!!data || data.status === RESPONSE_CODE.SUCCESS) {
      return Promise.resolve(data);
    }
    return Promise.reject(data);
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.get<T>(url, config);
      return this.handleResponseData<T>(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, config);
      return this.handleResponseData<T>(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.put<T>(url, data, config);
      return this.handleResponseData<T>(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.axiosInstance.delete<T>(url, config);
      return this.handleResponseData<T>(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
const instanceBaseAPI = new BaseAPI();
export default instanceBaseAPI;
