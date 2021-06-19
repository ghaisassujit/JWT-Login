import express from 'express';
import AuthenticationApi from '../api/authentication';
import { CommonRoutesConfig } from './common/common.routes.config';

export class AuthenticationRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthenticationRoutes');
    }

    configureRoutes() {
        this.app.route(`/login`)
            .post(AuthenticationApi.login);

        return this.app;
    }
}