import jwt from 'jsonwebtoken';
import { IUserModel } from '../Interface/IUserModel';
import Local from '../providers/Local';
import User from '../Schema/UserSchema';
import { encrypt , compareHash} from '../Service/EncryptDecrypt';
import Handler from '../ErrorHandler/Handler';
export class Authenticator {
    public static user: IUserModel;
    public static authenticateJWT = (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, Local.config().TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(401).send(err);
                }
                res.user = user;
                next();
            });
        } else {
            res.status(401).send({error : "Token Not Found"});
            next();
        }
    };
    public static refreshToken = async (request: any , response : any , next : any) => {
        let _user: any = new User();
        _user = await _user.collection.findOne({ email: request.email });
        //to-do make IUserMode variable initialize and make global EXCEPTION
        if (_user==null){
             return next(Handler.throwError('User Not Found', Handler.NOT_FOUND));
        }else if(!compareHash(request.password,_user.password)){
             return next(Handler.throwError('Password Not Correct', Handler.NOT_ALLOWED));
        }
        console.log(_user);
        let token = await jwt.sign({id:_user._id,email:_user.email}, Local.config().TOKEN_SECRET, { expiresIn: Local.config().TOKEN_EXPIRE_TIME });
        _user['token'] = token;
        response.data = _user;
        return _user;
    }
}