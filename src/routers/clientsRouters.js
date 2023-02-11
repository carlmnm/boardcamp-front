import { Router } from "express";
import { getCustomers, getCustomersById, postCustomers, putCustomers } from "../controller/clientController.js";
import { validateSchema } from "../middleware/gameSchemaMiddleware.js";
import  clientSchema from "../schemas/clientSchema.js"

const router = Router()

router.get("/customers", getCustomers)
router.get("/customer:id", getCustomersById)
router.post("/customers", validateSchema(clientSchema), postCustomers)
router.put("/customers:id", validateSchema(clientSchema), putCustomers)

export default router