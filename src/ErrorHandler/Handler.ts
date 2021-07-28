import express from 'express';
import Log from '../Middleware/Log';
import globalException from '../ErrorHandler/GlobalException';
import IError from '../Interface/IError';
class Handler {
    public static UNAUTHORIZED = 401;
    public static INTERNAL_SERVER_ERROR = 500;
    public static NOT_ALLOWED = 405;
    public static NOT_FOUND = 404;
    public static throwError(message: string, statusCode: number = Handler.UNAUTHORIZED): Error {
        const error = new IError(message);
        error.code = statusCode;
        return error;
    }
    public static errorHandler = (app: express.Application): express.Application => {
        app.use((err, req, res, next) => {
            Log.error(err.stack);
            if (req.xhr) {
                return res.status(500).send({ error: 'Something went wrong!' });
            } else {
                const code = err.code || Handler.UNAUTHORIZED;
                return res.status(err.code).json(
                    {
                        code : code,
                        message: err.message,
                        stack: err.stack,
                    });
            }
            // next(err);
        });
        return app;
    }
    public static routeNotFound = (app: express.Application): express.Application => {
        app.use((req, res, next) => {
            res.status(404).json({
                message: globalException.NOT_FOUND
            });
            next();
        });
        return app;
    }
}
// module.exports = new Handler;
export default Handler;