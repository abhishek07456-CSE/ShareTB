import Router from 'express';
import controller from '../Controller/ControllerMapping';
const router = Router();

router.post('/register', controller.sign_in);

export default router;