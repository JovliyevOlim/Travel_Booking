import express from "express";
import {deleteUser,getAllUser,getSingleUser,updateUser,createUser} from './../controllers/userController.js'

import {verifyUser,verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//create new user 
router.post('/',createUser);

//update user
router.put('/:id',verifyUser, updateUser);

//deleteuser
router.delete('/:id',verifyUser, deleteUser);

//get single user
router.get('/:id',verifyUser,getSingleUser);

//getAll user
router.get('/',verifyAdmin, getAllUser);

export default router;