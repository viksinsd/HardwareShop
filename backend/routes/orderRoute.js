import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders,paymentRazorpay, verifyRazorpay,updateStatus,userOrders,  placeOrderCod } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get("/list",listOrders);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.post("/place",authMiddleware,paymentRazorpay);
orderRouter.post("/status",updateStatus);
orderRouter.post("/verify",verifyRazorpay);
orderRouter.post("/placecod",authMiddleware,placeOrderCod);

export default orderRouter;