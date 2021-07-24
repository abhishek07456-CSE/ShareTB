import  IRequest from './IRequest';
import Joi from 'joi';
export default class LoginRequest extends IRequest {
    public rules(): any {
        return  {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        }
    }
}