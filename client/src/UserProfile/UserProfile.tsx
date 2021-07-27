import { default as React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../../../server/build/app_data/types';
import { ErrorText, Wrapper } from '../Login/Login.style';
import AuthenticationService from '../services/AuthenticationService';
import userApi from '../services/UserApi';

const UserProfile: React.FC = (props) => {
    let history = useHistory();
    let user: IUser = {id: '', userName: '', password: '', title: '', firstName: '', lastName: '', dateOfBirth: new Date(), gender: ''};
    const [currentUser, setCurrentUser] = useState(user);
    const [error, setError] = useState();
    
    useEffect(() => {
        userApi.getCurrentUserProfileDetails().then((user: IUser) => setCurrentUser(user)).catch(error => setError(error));
    },[]);

    const handleLogout = () => {
        AuthenticationService.logout();
        history.push('/login');
    };

    const renderContent = () => {
        if (error) {
          return <ErrorText> <label>Please try refreshing. Error: {error}</label></ErrorText>
        } else {
          return <div>
          <h1>Welcome {currentUser.title} {currentUser?.firstName} {currentUser?.lastName}!</h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
        }
      }

    return (
        <Wrapper>
            {
                renderContent()
            }
        </Wrapper>
      
      
        
    )
}

export default UserProfile;
