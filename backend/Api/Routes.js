import express from 'express';
import Controller from '../Controllers/Controller.js';

const router = express.Router();

router.post('/login', Controller.login);

router.post('/signup', Controller.signup);

router.post('/profile', Controller.profile);


router.get('/products', Controller.products);

router.get('/categories', Controller.categories);

router.get('/brands', Controller.brands);

router.get('/features', Controller.features);



export default router;
