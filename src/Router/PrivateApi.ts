import express from 'express';
import controller from '../Controller/ControllerMapping';
var router = express.Router();
router.get('/profile',controller.getProfile);
router.patch('/update_profile',controller.updateProfile);
router.post('/create_document', controller.createDocument);
router.use('/space/create',controller.createUserSpace);
export default router;