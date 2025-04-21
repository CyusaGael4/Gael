import express from 'express';
import auth from '../middleware/auth.js';
import checkRole from '../middleware/rolecheck.js';
import { getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', auth, checkRole(['admin']), getAllUsers);
router.get('/:id', auth, getUser);
router.put('/:id', auth, updateUser); // optionally check if owner
router.delete('/:id', auth, checkRole(['admin']), deleteUser);

export default router;
