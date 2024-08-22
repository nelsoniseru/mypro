import * as Joi from 'joi';

export const orderSchema = Joi.object({
  id: Joi.number().integer().optional(), 
  item: Joi.string().max(255).required(),
  quantity: Joi.number().integer().positive().required(),
  price: Joi.number().precision(2).positive().required(), 
  status: Joi.string().valid('PENDING', 'RECEIVED').default('PENDING'),
  deletedAt: Joi.date().optional().allow(null), 
});
