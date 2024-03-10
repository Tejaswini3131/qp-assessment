import express from "express";
import AdminController from "./controller";
import Middleware from "../middleware";
import AdminValidator from "./schema";

const adminRouter = express.Router();

adminRouter.post(
  '/create',
  AdminValidator.checkCreateTodo(),
  Middleware.handleValidationError,
  AdminController.createGrossary
);

adminRouter.get(
  '/getinv',
  AdminController.viewGrossary
);

adminRouter.delete(
  '/:id',
  AdminController.removeGrossary
);

adminRouter.put(
  '/:id',
  AdminController.updateGrossary
);

export default adminRouter;
