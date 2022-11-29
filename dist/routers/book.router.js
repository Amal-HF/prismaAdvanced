"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("../controllers/book.controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const book_schema_1 = require("../zod_schema/book.schema");
const router = express_1.default.Router();
router.get('/', book_controller_1.getAllBooksHandler);
router.post('/', (0, validate_1.default)(book_schema_1.bookSchema), book_controller_1.addBookHandler);
exports.default = router;
