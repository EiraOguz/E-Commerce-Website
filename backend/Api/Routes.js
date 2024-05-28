import express from 'express';
import AuthMiddleware from '../Middlewares/AuthMiddleware.js'
import OrderController from '../Controllers/OrderController.js';
import ProductController from '../Controllers/ProductController.js';
import UserController from '../Controllers/UserController.js';
import StockController from '../Controllers/StockController.js';

const router = express.Router();

//User
router.post('/login', UserController.login); // Login

router.post('/signup', UserController.signup); // Sign up 

//Product
router.post('/tokenmiddleware', AuthMiddleware.tokenmiddleware); // Token verification

router.get('/searchfilter', ProductController.searchfilters); // Search and Filter Options

router.get('/categories', ProductController.categories); //get Categories

router.get('/brands', ProductController.brands); // get Brands

router.get('/features', ProductController.features); // get features

router.get('/featuredetails', ProductController.featuredetails); // get feature details

//Order
router.get('/basket', OrderController.basket); // get Basket

router.post('/product', OrderController.product); // get Products

router.post('/addtobasket', OrderController.addToBasket); // add to Basket

router.post('/addtoorders', OrderController.addToOrders); // add to Orders

router.get('/clearbasket', OrderController.clearBasket); // delete all Basket items

router.get('/orders', OrderController.orders); // get Orders

router.get('/removefrombasket', OrderController.removeFromBasket); // remove product from basket

router.post('/updatebasket', OrderController.updateBasket); // update product number value

//Stock

router.post('/stock', StockController.stock);

router.post('/updatestock', StockController.updateStock);


export default router;
