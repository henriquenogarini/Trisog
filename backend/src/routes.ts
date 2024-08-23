import { Router } from "express"
import { TripController } from "./controllers/TripController"
import { TypeController } from "./controllers/TypeController"
import { TripTypeController } from "./controllers/TripTypeController"

const router = Router()

const tripController = new TripController()
const typeController = new TypeController()
const triptypeController = new TripTypeController()

router.post("/trip", tripController.create)
router.get("/trip", tripController.getAll)
router.get("/trip/:id", tripController.getById)
router.put("/trip/:id", tripController.update)
router.delete("/trip/:id", tripController.delete)

router.post("/type", typeController.create)
router.get("/type", typeController.getAll)
router.get("/type/:id", typeController.getById)
router.put("/type/:id", typeController.update)
router.delete("/type/:id", typeController.delete)

router.post("/triptype", triptypeController.create)
router.get("/triptype", triptypeController.getAll)
router.get("/triptype/:id", triptypeController.getById)
router.put("/triptype/:id", triptypeController.update)
router.delete("/triptype/:id", triptypeController.delete)


export default router