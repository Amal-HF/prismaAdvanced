import express from 'express';
import { getAllUsersHandler, addUserHandler} from '../controllers/user.controller';
import validate from '../middleware/validate';
import { userSchema } from '../zod_schema/user.schema';

const router = express.Router();

router.get('/', getAllUsersHandler);
router.post('/', validate(userSchema), addUserHandler);

export default router;