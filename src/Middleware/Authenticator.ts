import jwt from 'jsonwebtoken';
import { getMongoRepository } from 'typeorm';
import Local from '../providers/Local';
import { encrypt } from '../Service/EncryptDecrypt';
export class Authenticator {
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
        }
    };
    public static getToken = async (data) => {
        // const userRepository = getMongoRepository(User);
        // const users = await userRepository.find({
        //     where: {
        //         'email': data.email,
        //         "password" : data.password
        //     }
        // });
        // console.log(users.entries());
        return await jwt.sign(data, Local.config().TOKEN_SECRET, { expiresIn: Local.config().TOKEN_EXPIRE_TIME });
    }
}