import axios, { AxiosInstance } from "axios";
import { configurations } from '../Config';
import authenticationService from '../services/AuthenticationService';
import { setupInterceptor } from "./ApiInterceptor";

export class ApiBase {
    protected readonly baseUrl: string;
    protected readonly axios: AxiosInstance;

    constructor(){
        this.baseUrl = configurations.authServiceBasePath;
        this.axios = setupInterceptor(axios.create());
    }

    public getCurrentLoggedInUserId(): string | undefined {
        return authenticationService.getLoggedInUserId();
    }
}


