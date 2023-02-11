import { db } from "../config/database.conection.js";

export async function getGames (req, res) {
    try{
        const games = await db.query("SELECT * FROM games")

        res.send(games.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function postGames (req, res) {
    const {name, image, stockTotal, pricePerDay} = req.body;
    
    try{
        console.log("sdfsd")
        const newGame = await db.query(`INSERT INTO games (name,image,"stockTotal","pricePerDay")
        VALUES ($1, $2, $3, $4) RETURNING *;`
        , [name, image, stockTotal, pricePerDay])

        res.status(201).send(newGame.rows)
    } catch (err){
        console.log(err)
    }
}