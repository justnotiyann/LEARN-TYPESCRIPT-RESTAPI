import express, { Request, Response, NextFunction } from "express"
import { createUser, getAllUsers } from "./users.controller"
const router = express.Router()


router.get('/', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await getAllUsers()
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
})

router.post('/create', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { username, email, password } = req.body
        const result = await createUser(username, email, password)
        res.status(200).json({
            data: result
        })
    } catch (error: any) {
        next(error)
    }

})


export default router