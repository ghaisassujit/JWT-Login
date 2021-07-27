import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import authenticationService from '../services/AuthenticationService';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const bearerToken =  'Bearer ' + authenticationService.getToken() + '';
    config.headers['authorization'] = bearerToken;
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export const setupInterceptor = (axiosInstance: AxiosInstance): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};