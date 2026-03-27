import express, { Application, Request, Response } from "express"; 
import cors from "cors";
import config from "./app/config";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { rootRoute } from "./app/routes";
const app: Application = express();
app.use(express.json());
app.use(cors({
  origin: config.FRONTEND_URL || true,
  credentials: true,
}));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "QCEXCLUSIVE Server is running successfully",
    upTime: process.uptime().toFixed(2) + " sec",
    Date: new Date(),
  });
});

app.use("/api/v1",rootRoute)

// app.use("/api/v1",rootRoute)
app.use(globalErrorHandler);
app.use(notFound)


export default app;
