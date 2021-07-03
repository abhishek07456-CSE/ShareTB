import express from 'express';
import Log from '../Middleware/Log';
import globalException from '../ErrorHandler/GlobalException';
class Handler{

    errorHandler = (app : express.Application) : express.Application => {
        app.use((err,req,res,next)=>{
            console.log(err);
            Log.error(err.stack);
            if (req.xhr) {
                return res.status(500).send({error: 'Something went wrong!'});
            } else {
                return next(err);
            }
        });
        return app;
    }
    routeNotFound = (app : express.Application) : express.Application => {
        app.use((req,res,next)=>{
            res.status(404).json({
                message: globalException.NOT_FOUND
            });
            next();
        });
        return app;
    }
}
// module.exports = new Handler;
export default new Handler;