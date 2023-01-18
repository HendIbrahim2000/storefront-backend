import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import productRoutes from './handlers/products'
import orderRoutes from './handlers/orders'
import cors from 'cors';
import userRoutes from './handlers/users';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOption = {
    optionsSuccessStatus: 200 // for some lagacy browsers
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
productRoutes(app)
orderRoutes(app)
userRoutes(app)
app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})



app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

