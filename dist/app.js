"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const book_router_1 = __importDefault(require("./routers/book.router"));
const loan_router_1 = __importDefault(require("./routers/loan.router"));
require("dorenv/config");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// db connection
(0, db_1.connectDB)();
// middlewares
app.use('/api/v1/user', user_router_1.default);
app.use('/api/v1/book', book_router_1.default);
app.use('/api/v1/loan', loan_router_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is runninr in port: ' + PORT);
});
