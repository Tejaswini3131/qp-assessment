import express from "express";
import Middleware from "../middleware";
import OrderController from "./controller";

const orderRouter = express.Router();

orderRouter.get(
  '/order/inv',
  OrderController.getAvailbleGrossary
);

orderRouter.post(
  '/order/create',
  OrderController.placeOrder
);

export default orderRouter;
