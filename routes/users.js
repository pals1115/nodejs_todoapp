import  express  from 'express';

import  { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


let users = [] ;


router.get('/', getUsers); // get all users 

router.post('/', createUser);//create new user

router.get('/:id', getUser);

router.delete('/:id', deleteUser); 

router.patch('/:id', updateUser);

export default router;


