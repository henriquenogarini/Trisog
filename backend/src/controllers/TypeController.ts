import { Request, Response } from "express"
import prismaClient from "../database/prismaClient"

export class TypeController {
    async create(req: Request, res: Response) {
        const { name_type } = req.body

        const type = await prismaClient.type.create({
            data: {
                name_type
            }
        })

        return res.json(type)
    }

    async getAll(req: Request, res: Response) {
        const type = await prismaClient.type.findMany()
        return res.json(type)
    }

    async getById(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const type = await prismaClient.type.findUnique({
            where: {
                id
            }
        })
        return res.json(type)
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const { name_type} = req.body

        const type = await prismaClient.type.update({
            where: { id },
            data: {
                name_type
            }
        })

        return res.json(type)
    }
    

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const type = await prismaClient.type.delete({
            where: {
                id
            }
        })
        return res.json(type)
    }
}