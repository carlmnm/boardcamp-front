import Joi from "joi";

const gameSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string().uri().required(),
    stockTotal: Joi.number().positive().required(),
    pricePerDay: Joi.number().positive().required()
})

export default gameSchema;