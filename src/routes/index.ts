import { Router } from 'express';

const router = Router();

router.get('/products', async (request, response) => response.status(200).json([]));

export default router;
