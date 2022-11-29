import express from 'express';
import { getAllLoansHandler, addLoanHandler, lendBookHandler, lendedBooksHandler} from '../controllers/loan.controller';
import validate from '../middleware/validate';
import { loanSchema, loanParamsSchema } from '../zod_schema/loan.schema';

const router = express.Router();

router.get('/', getAllLoansHandler);
router.post('/', validate(loanSchema), addLoanHandler);
router.post('/', validate(loanParamsSchema), lendBookHandler);
router.post('/', validate(loanParamsSchema), lendedBooksHandler);

export default router;