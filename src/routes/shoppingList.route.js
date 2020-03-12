import express from 'express';
import checkToken from '../interceptors/VerifyToken.interceptor';

const router = express.Router();

router.get('/', checkToken, (req, res) => {
    res.json([
        {name: 'motherboard', description: 'Z370 gaming 7'},
        {name: 'video card', description: '1080 ti zotac amp extreme'},
        {name: 'water cooler', description: 'thermalTake ring 360'}
    ])
});

export default router;
