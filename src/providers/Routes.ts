/**
 * Route File all private and public router mounted
 *
 * @author abhishek07456.cse <abhishek07456.cse@gmail.com>
 */


import express from 'express';
import privateApi from '../Router/PrivateApi';
import publicApi from '../Router/PublicApi';
import Local from './Local';
import { Authenticator } from '../Middleware/Authenticator';
class Routes {
    public mountPrivateApi = (app: express.Application): express.Application => {
        app.use(`${Local.config().private_endpoint}`, Authenticator.authenticateJWT , privateApi);
        return app;
    }
    public mountPublicApi = (app: express.Application): express.Application => {
        app.use(`${Local.config().public_endpoint}`, publicApi);
        return app;
    }
}

export default new Routes;