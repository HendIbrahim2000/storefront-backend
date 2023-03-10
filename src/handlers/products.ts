import express, { Request, Response } from 'express'
import { authToken } from '../middlewares/auth'
import { Product, ProductStore } from '../models/product'

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  const product = await store.index()
  res.json(product)
}

const show = async (req: Request, res: Response) => {
   const product = await store.show(req.params.id)
   res.json(product)
}

const create = async (req: Request, res: Response) => {
    try {
        const product: Product = {
            name: req.body.name,
            price: req.body.price,
        }
        const newProduct = await store.create(product)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', authToken, create)
  app.delete('/products', authToken, destroy)
}

export default productRoutes