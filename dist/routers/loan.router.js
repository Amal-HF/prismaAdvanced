"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loan_controller_1 = require("../controllers/loan.controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const loan_schema_1 = require("../zod_schema/loan.schema");
const router = express_1.default.Router();
router.get('/', loan_controller_1.getAllLoansHandler);
router.post('/', (0, validate_1.default)(loan_schema_1.loanSchema), loan_controller_1.addLoanHandler);
exports.default = router;
