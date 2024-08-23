import { Request, Response } from "express"
import prismaClient from "../database/prismaClient"

export class TripTypeController {
    async create(req: Request, res: Response) {
        const { id_trip, id_type } = req.body

        const triptype = await prismaClient.tripType.create({
            data: {
                id_trip: id_trip,
                id_type: id_type
            }
        })

        return res.json(triptype)
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
        const { type: typeName } = req.body

        const type = await prismaClient.type.update({
            where: { id },
            data: {
                type: typeName
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