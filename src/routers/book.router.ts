import express from 'express';
import { getAllBooksHandler, addBookHandler } from '../controllers/book.controller';
import validate from '../middleware/validate';
import { bookSchema } from '../zod_schema/book.schema';

const router = express.Router();

router.get('/', getAllBooksHandler);
router.post('/', validate(bookSchema), addBookHandler);

export default router;