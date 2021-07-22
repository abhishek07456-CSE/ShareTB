import Router from 'express';
import controller from '../Controller/ControllerMapping';
const router = Router();

router.post('/signup', controller.register);
router.post('/login', controller.login);
export default router;