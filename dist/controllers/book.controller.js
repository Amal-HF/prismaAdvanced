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
exports.addBookHandler = exports.getAllBooksHandler = void 0;
const db_1 = require("../config/db");
const getAllBooksHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield db_1.prisma.book.findMany();
    return res.status(200).json(books);
});
exports.getAllBooksHandler = getAllBooksHandler;
const addBookHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = req.body;
    try {
        yield db_1.prisma.book.create({
            data: newBook,
        });
        res.status(201).json({
            message: 'New book added'
        });
    }
    catch (error) {
        const prismaError = error;
        res.status(400).json({
            message: prismaError,
        });
    }
});
exports.addBookHandler = addBookHandler;
