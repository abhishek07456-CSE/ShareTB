/**
 * Route File all private and public router mounted
 *
 * @author abhishek07456.cse <abhishek07456.cse@gmail.com>
 */


import express from 'express';
import privateApi from '../Router/PrivateApi';
import publicApi from '../Router/PublicApi';
class Routes {
    public mountPrivateApi = (app: express.Application): express.Application => {
        app.use("/admin", privateApi);
        return app;
    }
    public mountPublicApi = (app: express.Application): express.Application => {
        app.use("/", publicApi);
        return app;
    }
}

export default new Routes;