import axios from 'axios';
import { decode } from "jsonwebtoken";
import { configurations } from '../Config';

class AuthorisationService {

    private token: string | undefined = undefined;
    private userId: string | undefined = undefined
    public getToken() {
        if(!this.token) window.location.assign('/login');
        return this.token;
    }

    public getLoggedInUserId() {
        return this.userId;
    }

    public login(username: string, password: string) {
        let success = false;

        return new Promise((resolve,reject) => {
            axios.post(`${configurations.authServiceBasePath}/login`, { userName: username, password: password })
            .then(response => {
                
                this.token = response.data.accessToken;
                let decodedToken = decode(response.data.accessToken, { complete: true });
                if (decodedToken && decodedToken.payload) {
                    this.userId = decodedToken.payload;
                }
                resolve(true);
                
            }).catch(error => {
                let errorMessage = 'Unexpected error occurred. Please try again.'; 
                if(error && error.response && error.response.data && error.response.data.error){
                    errorMessage = error.response.data.error.message;
                }
                reject(errorMessage);
            });
        });
    }

    public logout() {
        this.token = undefined;
        this.userId = undefined;
    }
}

const authenticationService = new AuthorisationService();

export default authenticationService;