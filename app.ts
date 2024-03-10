import express from "express";
import adminRouter from "./admin/route";
import orderRouter from "./Portal/route";

const app = express();

app.use(express.json());

app.use("/api/v1", adminRouter);

app.use("/api/v1", orderRouter);

export default app;
