import baseAPI from './axios/baseAPI';
import { AxiosResponse } from 'axios';

export function getAllUsers<T>(): Promise<AxiosResponse<T>> {
  return baseAPI.get('api/v1/user/list/');
}
