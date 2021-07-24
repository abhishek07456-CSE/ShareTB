import {Request,NextFunction} from 'express';
import Joi from 'joi';
export default abstract class IRequest implements Request {
  public Auth = (): boolean => {
    return false;
  }
  public abstract rules() : any;
  public validateRequest = (...args): any => {
    let schemaRule =  Joi.object(this.rules());
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };
    return schemaRule.validate(args[0].body , options);
    // if (error) {
    //   throw new Error(`${error.details.map(x => x.message).join(', ')}`);
    //   // on fail return comma separated errors
    // }
    // return error;
  }
}