import jwt from 'jsonwebtoken';
import { IUserModel } from '../Interface/IUserModel';
import Local from '../providers/Local';
import User from '../Schema/UserSchema';
import { encrypt , compareHash} from '../Service/EncryptDecrypt';

export class Authenticator {
    public static user: IUserModel;
    public static authenticateJWT = (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, Local.config().secretKey, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
            next();
        }
    };
    public static refreshToken = async (data: any) => {
        let _user: any = new User();
        _user = await _user.collection.findOne({ email: data.email });
        //to-do make IUserMode variable initialize and make global EXCEPTION
        if (_user==null)
            return "user not found";
        else if(!compareHash(data.password,_user.password))
            return "password not correct";
        let token = await jwt.sign({id:_user.id,email:_user.email}, Local.config().TOKEN_SECRET, { expiresIn: Local.config().TOKEN_EXPIRE_TIME });
        _user['token'] = token;
        return _user;
    }
}