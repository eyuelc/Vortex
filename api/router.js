import express from 'express';
import { users } from '../src/data.js'

const router = express.Router();

router.get('/users', (req, res)=>{
    res.status(200).json(users);
})

export default router;
