import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService';

const UserProfile: React.FC = (props) => {

    const [currentUser, setCurrentUser] = useState(AuthenticationService.getUser());

    let history = useHistory();
    useEffect(() => {
        if (!AuthenticationService.getToken()) {
            history.push('/login');
        }
    });

    const handleLogout = () => {
        console.log('handleLogout');
        AuthenticationService.logout();
        history.push('/login');
    };

    return (
        <div>
            <h1>Welcome {currentUser?.title} {currentUser?.firstName} {currentUser?.lastName}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserProfile;