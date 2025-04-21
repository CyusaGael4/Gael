import express from 'express';
import auth from '../middleware/auth.js';
import checkRole from '../middleware/rolecheck.js';
import {
  getAll, getOne, create, update, delete as remove
} from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', auth, checkRole(['admin']), create);
router.put('/:id', auth, checkRole(['admin']), update);
router.delete('/:id', auth, checkRole(['admin']), remove);

export default router;
