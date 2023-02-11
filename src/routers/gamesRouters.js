import { Router } from "express";
import { getGames, postGames } from "../controller/gamesController.js";
import { validateSchema } from "../middleware/gameSchemaMiddleware.js";
import gameSchema from "../schemas/gamesSchema.js"


const router = Router()

router.get("/games", getGames)
router.post("/games", validateSchema(gameSchema), postGames)

export default router