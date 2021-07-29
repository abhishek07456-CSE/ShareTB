import express from 'express';
import controller from '../Controller/ControllerMapping';
var router = express.Router();
router.get('/profile',controller.getProfile);
router.patch('/update_profile',controller.updateProfile);
export default router;