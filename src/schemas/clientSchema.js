import Joi from "joi";

const clientSchema = Joi.object({
    name: Joi.string().min(1).required(),
    phone: Joi.string().min(10).max(11).uri().required(),
    cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    birthday: Joi.date().format('YYYY-MM-DD').options({ convert: false }), 
})

export default clientSchema;