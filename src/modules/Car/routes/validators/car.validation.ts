import { Joi, Segments, celebrate } from 'celebrate';

export const createCarMiddleware = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    age: Joi.number().positive(),
    brand: Joi.string(),
    price: Joi.string(),
    webhook_url: Joi.string().required(),
  },
});
