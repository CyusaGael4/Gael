import express from 'express';
import auth from '../middleware/auth.js';
import checkRole from '../middleware/rolecheck.js';
import checkOwner from '../middleware/ownercheck.js';
import {
  getAll, getOne, getByCategory, create, update, delete as remove
} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/category/:id', getByCategory);
router.post('/', auth, checkRole(['author', 'admin']), create);
router.put('/:id', auth, checkOwner, update);
router.delete('/:id', auth, checkOwner, remove);

export default router;
