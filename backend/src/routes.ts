import { Router } from "express"
import { TripController } from "./controllers/TripController"

const router = Router()

const tripController = new TripController

router.post("/trip", tripController.create)
router.get("/trip", tripController.getAll)
router.get("/trip/:id", tripController.getById)
router.put("/trip/:id", tripController.update)
router.delete("/trip/:id", tripController.delete)

export default router