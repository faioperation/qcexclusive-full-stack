"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        const allowedOrigins = [
            config_1.default.FRONTEND_URL,
            "http://localhost:3000",
            "http://localhost:5173",
            "http://172.252.13.90:8042",
            "http://172.252.13.90",
        ].filter(Boolean);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error(`CORS blocked: ${origin}`));
        }
    },
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "QCEXCLUSIVE Server is running successfully",
        upTime: process.uptime().toFixed(2) + " sec",
        Date: new Date(),
    });
});
app.use("/api/v1", routes_1.rootRoute);
// app.use("/api/v1",rootRoute)
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
