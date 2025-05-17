import express from 'express';
import { 
  createUser, 
  getUsers, 
  getUser, 
  updateUser, 
  deleteUser 
} from '../controllers/userController';

const router = express.Router();

// Rotas para usuários
router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
