import { Request, Response } from "express"
import prismaClient from "../database/prismaClient"

export class TripController {
    async create(req: Request, res: Response) {
        const { id_type, destine, location, price, days, start_date, image} = req.body

        const trip = await prismaClient.trip.create({
            data: {
                id_type,
                destine,
                location,
                price,
                days,
                start_date,
                image
            }
        })

        return res.json(trip)
    }

    async getAll(req: Request, res: Response) {
        const trips = await prismaClient.trip.findMany()
        return res.json(trips)
    }

    async getById(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const trip = await prismaClient.trip.findUnique({
            where: {
                id
            }
        })
        return res.json(trip)
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const { destine, location, price, days, start_date, image, id_type} = req.body

        const trip = await prismaClient.trip.update({
            where: { id },
            data: {
                id_type,
                destine,
                location,
                price,
                days,
                start_date,
                image
            }
        })

        return res.json(trip)
    }
    

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const trip = await prismaClient.trip.delete({
            where: {
                id
            }
        })
        return res.json(trip)
    }
}