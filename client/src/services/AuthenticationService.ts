import axios from 'axios';
import { decode } from "jsonwebtoken";
import { IUser } from '../../../server/build/app_data/types';
import { configurations } from '../Config';

class AuthorisationService {

    private token = '';
    private user?: IUser = undefined
    public getToken() {
        return this.token;
    }

    public getUser() {
        return {...this.user};
    }

    public login(username: string, password: string, callback: ((error: any, sucess: any) => any)) {
        let success = false;

        return axios.post(`${configurations.authServiceBasePath}/login`, { userName: username, password: password })
            .then(response => {
                if (response.status === 200) {
                    success = true;
                    this.token = JSON.stringify(response.data.accessToken);
                    let decodedToken = decode(response.data.accessToken, { complete: true });
                    if (decodedToken && decodedToken.payload) {
                        this.user = decodedToken.payload as IUser;
                    }
                }
                callback('Unexpected error occurred. Please try again.', success);
            }).catch(error => {
                let errorMessage = 'Unexpected error occurred. Please try again.'; 
                if(error && error.response && error.response.data && error.response.data.error){
                    errorMessage = error.response.data.error.message;
                }
                callback(errorMessage, success);
                
            });
    }

    public logout() {
        this.token = '';
        this.user = undefined;
    }
}

const authenticationService = new AuthorisationService();

export default authenticationService;