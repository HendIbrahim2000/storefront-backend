import express, { Request, Response } from 'express'
import { authToken } from '../middlewares/auth'
import { User, UserStore } from '../models/user'

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
  const user = await store.index()
  res.json(user)
}

const show = async (req: Request, res: Response) => {
   const user = await store.show(req.params.id)
   res.json(user)
}

const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            username: req.body.username,
            password: req.body.password
        }
        const newuser = await store.create(user)
        res.json(newuser)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const userRoutes = (app: express.Application) => {
  app.get('/users', authToken, index)
  app.get('/users/:id', authToken, show)
  app.post('/users', authToken, create)
  app.delete('/users', authToken, destroy)
}

export default userRoutes