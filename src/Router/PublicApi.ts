import Router from 'express';
import controller from '../Controller/ControllerMapping';
const router = Router();

router.post('/signup', controller.sign_in);
router.post('/login', controller.login);
export default router;