import express from 'express';
import controller from '../Controller/ControllerMapping';
var router = express.Router();
router.get('/profile/:id',controller.getProfile);
export default router;