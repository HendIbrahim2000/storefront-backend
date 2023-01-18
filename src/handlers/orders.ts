import express, { Request, Response } from 'express'
import { authToken } from '../middlewares/auth'
import { Order, OrderStore } from '../models/order'

const store = new OrderStore()

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            userID: req.body.userID,
            complete: req.body.complete,
        }
        console.log(req.body)
        const newOrder = await store.create(order)
        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const addProduct = async (req: Request, res: Response) => {
    try {
        const orderID : number = parseInt(req.params.id);
        const productID : number = parseInt(req.params.productID);
        const quantity : number = parseInt(req.params.quantity);
        const addedProduct = await store.addProduct(orderID, productID, quantity)
        res.json(addedProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const getUserOrder = async (req: Request, res: Response) => {
    try {
        const userID: number = parseInt(req.params.id)
        const addedProduct = await store.getUserOrder(userID)
        res.json(addedProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}


const orderRoutes = (app: express.Application) => {
    app.post('/orders', authToken, create)
    app.get('/orders/:id', authToken, addProduct)
    app.get('/orders/:id/orders', authToken, getUserOrder)
}

export default orderRoutes