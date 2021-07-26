import Router from 'express';
import controller from '../Controller/ControllerMapping';
import { Authenticator } from '../Middleware/Authenticator';
const router = Router();

router.post('/signup', controller.register);
router.post('/login', Authenticator.refreshToken, controller.login);
export default router;