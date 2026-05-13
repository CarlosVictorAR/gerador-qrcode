import { Router } from 'express';
import qrcodePostController from '../controllers/qrcodeController.js';

const router = Router();

router.post('/qrcode', (req, res) => {
    qrcodePostController(req, res);
});

export default router;