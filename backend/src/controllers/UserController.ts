import { Request, Response } from "express"

const users = [
    { name: 'Igor', email: 'igor@igor.com' }
]

//Método que irá fazer a listagem dos usuários

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    }
}