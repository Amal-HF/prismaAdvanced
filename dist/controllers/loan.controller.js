"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserHandler = exports.getAllLoansHandler = void 0;
const db_1 = require("../config/db");
const getAllLoansHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loans = yield db_1.prisma.loan.findMany();
    return res.status(200).json(loans);
});
exports.getAllLoansHandler = getAllLoansHandler;
const addUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newLoan = req.body;
    try {
        yield db_1.prisma.loan.create({
            data: newLoan,
        });
        res.status(201).json({
            message: 'New loan added'
        });
    }
    catch (error) {
        const prismaError = error;
        res.status(400).json({
            message: prismaError,
        });
    }
});
exports.addUserHandler = addUserHandler;
