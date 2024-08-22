import { Router } from "express"
import { TripController } from "./controllers/TripController"

const router = Router()

const tripController = new TripController

router.post("/trip", tripController.create)

export default router