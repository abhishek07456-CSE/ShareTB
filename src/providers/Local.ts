/**
 * Primary file for your  API Server
 *
 * @author abhishek07456.cse <abhishek07456.cse@gmail.com>
 */


import express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
    public config(): any {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const port = process.env.PORT || 9090;
        const url = process.env.APP_URL || `http://127.0.0.1:${port}`;
        const apiPrefix = 'api';
        const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
		const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
        const DbUrl  = process.env.DB_URL  || 'mongodb://localhost:27017';
        const DbName = process.env.DB_NAME || 'sharetube';
        const private_endpoint = '/api';
        const public_endpoint  = '/';
        const TOKEN_EXPIRE_TIME = process.env.TOKEN_EXPIRE_TIME || "1800s";
        const TOKEN_SECRET = process.env.TOKEN_SECRET || 'sharetubesharefiletogether';
        const AppName = "sharetube";
        const azureContainerConn = "https://sharetube.blob.core.windows.net/sharetube?sp=racwdli&st=2021-08-07T19:39:49Z&se=2021-08-21T03:39:49Z&sip=127.0.0.1&sv=2020-08-04&sr=c&sig=krBZ%2BvZDoaYK37uQv21co%2B5onCacnWWCpCPZ%2Fw%2FqG14%3D";
        return {
            port,
            url,
            apiPrefix,
            maxUploadLimit,
            maxParameterLimit,
            DbUrl,
            DbName,
            public_endpoint,
            private_endpoint,
            TOKEN_EXPIRE_TIME,
            TOKEN_SECRET,
            AppName,
            azureContainerConn
        };
    }

    public init(_app: express.Application): express.Application {
        _app.locals.app = this.config();
        // console.log(_app.locals.app.port);
        return _app;
    }
}

export default new Locals;
