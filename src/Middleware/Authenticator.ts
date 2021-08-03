import { ObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import Local from '../providers/Local';
import User from '../Schema/User.schema';
import { encrypt , compareHash} from '../Service/EncryptDecrypt';
import Handler from '../ErrorHandler/Handler';
import UserModel from '../Models/UserModel';
export class Authenticator {
    public static id: ObjectId;
    public static authenticateJWT =  (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, Local.config().TOKEN_SECRET,  async (err, user) => {
                if (err) {
                    return res.status(401).send(err);
                }
                const User = new UserModel();
                Authenticator.id = user.id;
                const dat = await User.getUserById();
                res.user = dat;
                next();
            });
        } else {
            res.status(401).send({error : "Token Not Found"});
            next();
        }
    };
    public static refreshToken = async (request: any , response : any , next : any) => {
        let _user: any = new User();
        _user = await _user.collection.findOne({ email: request.body.email });
        //to-do make IUserMode variable initialize and make global EXCEPTION
        if (_user==null){
             return next(Handler.throwError('User Not Found', Handler.NOT_FOUND));
        }else if(!compareHash(request.body.password,_user.password)){
             return next(Handler.throwError('Password Not Correct', Handler.NOT_ALLOWED));
        }
        let token = await jwt.sign({id:_user._id,email:_user.email}, Local.config().TOKEN_SECRET, { expiresIn: Local.config().TOKEN_EXPIRE_TIME });
        _user['token'] = token;
        response.data = _user;
        next();
    }
}