import { Router } from "express";
import { getGames } from "../controller/games.controller.js";

const router = Router()

router.get("/games", getGames)

export default router