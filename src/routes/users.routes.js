import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get('/v1/api/users', (req, res) => {
    res.send('Get user route')
})

userRouter.post('/v1/api/users', createUser)

userRouter.put('/v1/api/users', (req, res) => {
    res.send('put user route')
})

userRouter.patch('/v1/api/users', (req, res) => {
    res.send('patch user route')
})

userRouter.delete('/v1/api/users', (req, res) => {
    res.send('delete user route')
})

export default userRouter;