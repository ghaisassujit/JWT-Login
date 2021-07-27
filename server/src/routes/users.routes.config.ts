import express from 'express';
import UsersApi from '../api/users';
import { authenticationCheck } from '../middleware/authentication/authenticationCheck';
import { CommonRoutesConfig } from './common/common.routes.config';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CategoriesRoutes');
    }

    configureRoutes() {
        
        this.app.route(`/users/:userId`)
            .all(authenticationCheck)
            .get(UsersApi.getUser); 

        this.app.route(`/users`)
            .all(authenticationCheck)
            .get(UsersApi.getUsers);    

        return this.app;
    }
}