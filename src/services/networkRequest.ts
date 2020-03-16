import axios, { AxiosInstance, AxiosRequestConfig, Method, AxiosResponse, AxiosError } from 'axios';
import SessionManager from './SessionManager';
import configuration from '../configuration';
import { ResponseError, NetworkResponse } from './networkTypes';

const networkClient : AxiosInstance = axios.create({
  baseURL: configuration.baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

networkClient.interceptors.request.use(
   (conf: AxiosRequestConfig) : AxiosRequestConfig | Promise<AxiosRequestConfig> => {
     var session = new SessionManager();
     if (session.isLoggedIn()) {
       return {
         ...conf,
         headers: {
           ...conf.headers,
           Authorization: `Bearer ${session.getToken()}`
         }
       }
     }
     return {
       ...conf,
       headers: {
         ...conf.headers
       }
     }
  },
  error => Promise.reject(error)
);

const networkRequest = <T>(method: string, url: string, data: {}) : Promise<NetworkResponse<T>> => {

  const promise = new Promise<NetworkResponse<T>>((resolve, reject) => {
    networkClient({url, data, method: method as Method })
      .then((response: AxiosResponse<NetworkResponse<T>>) => {
        const responseData : NetworkResponse<T> = response.data;
        resolve(responseData);
      })
      .catch((error: AxiosError) => {
        if (error && error.response) {
          const errorResponseData = error.response as AxiosResponse<NetworkResponse<ResponseError>>;
          reject(errorResponseData.data.payload);
        } else {
          const genericError : ResponseError = {
            error: "Network Error"
          }
          reject(genericError);
        }
      });
  });

  return promise;

}

export default networkRequest;
