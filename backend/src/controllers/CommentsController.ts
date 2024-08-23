import { Request, Response } from "express"
import prismaClient from "../database/prismaClient"

export class CommentsController {
    async create(req: Request, res: Response) {
        const {
             id_trip,
             name,
             email,
             description,
             note_services,
             note_prices,
             note_locations,  
             note_food,
             note_amenities,
             note_comfort
            } = req.body

        const comments = await prismaClient.comments.create({
            data: {
                id_trip: id_trip,
                name,
                email,
                description,
                note_services,
                note_prices,
                note_locations,
                note_food,
                note_amenities,
                note_comfort
            }
        })

        return res.json(comments)
    }

    async getAll(req: Request, res: Response) {
        const comments = await prismaClient.comments.findMany()
        return res.json(comments)
    }

    async getById(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const comments = await prismaClient.comments.findUnique({
            where: {
                id
            }
        })
        return res.json(comments)
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const { 
             name,
             email,
             description,
             note_services,
             note_prices,
             note_locations,  
             note_food,
             note_amenities,
             note_comfort
          } = req.body

        const comments = await prismaClient.comments.update({
            where: { id },
            data: {
                name,
                email,
                description,
                note_services,
                note_prices,
                note_locations,  
                note_food,
                note_amenities,
                note_comfort
            }
        })

        return res.json(comments)
    }
    

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const comments = await prismaClient.comments.delete({
            where: {
                id
            }
        })
        return res.json(comments)
    }
}