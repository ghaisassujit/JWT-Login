import { useHistory } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService';

export const unauthorisedRedirectionTo = (path: string) => {
    let history = useHistory();
    if (!AuthenticationService.getToken()) {
        history.push(path);
    }
}