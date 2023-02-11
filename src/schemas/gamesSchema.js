import Joi from "joi";

const gameSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string().uri().required(),
    stockTotal: Joi.number().min(0).required(),
    pricePerDay: Joi.number().min(0).required()
})

export default gameSchema;