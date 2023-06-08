import 'express-async-errors';
import express, { Express, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose';

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect("mongodb://127.0.0.1/LEARN-EXPRESS")
    .then(data => console.log("Connected to database"))
    .catch(e => console.log(e.message))


// Routes
app.get('/', function (req: Request, res: Response) {
    res.status(200).json({
        message: "Welcome to project typescript"
    })
})

import UserRoutes from './app/api/users/users.routes'
app.use('/users', UserRoutes)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        data: err
    })
});


app.listen(3000, () => {
    console.log("server running on port 3000")
})

export default app
