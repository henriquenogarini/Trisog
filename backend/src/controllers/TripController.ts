import { Request, response, Response } from "express"
import prismaClient from "../database/prismaClient"

export class TripController {
    async create(req: Request, res: Response) {
        const { destine, location, price, days, date, image, extraImages } = req.body

        const trip = await prismaClient.trip.create({
            data: {
                destine,
                location,
                price,
                days,
                date,
                image,
                extraImages
            }
        })

        return res.json(trip)
    }
}