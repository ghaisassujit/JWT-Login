import { IUser } from '../../../server/build/app_data/types';
import { ApiBase } from './ApiBase';

class UserApi extends ApiBase{
    constructor(){
        super();
    }

    public getCurrentUserProfileDetails(userId: string | undefined = undefined): Promise<IUser>{
        return new Promise((resolve, reject) => {
            
            this.axios.get(`${this.baseUrl}/users/${this.getCurrentLoggedInUserId()}`)
            .then(response => {
                resolve(response.data as IUser);
            }).catch(error => {
                let errorMessage = 'Unexpected error occurred. Please try again.'; 
                if(error && error.response && error.response.data && error.response.data.error){
                    errorMessage = error.response.data.error.message;
                }
                reject(errorMessage);
            });
        }); 
    }   
} 

const userApi = new UserApi();

export default userApi;