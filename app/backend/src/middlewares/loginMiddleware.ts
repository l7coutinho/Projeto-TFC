import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import IUsers from '../Interfaces/users/IUsers';

const invalidInput = 'Invalid email or password';
const missingInput = 'All fields must be filled';
export default class isValidLogin {
  private static schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': invalidInput,
      'string.empty': missingInput,
      'any.required': missingInput,
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': invalidInput,
      'string.empty': missingInput,
      'any.required': missingInput,
    }),
  });

  private static isValidError(user: IUsers) {
    const { error } = isValidLogin.schema.validate(user);

    if (error) {
      return error.details[0].message;
    }
  }

  public static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const dataMessage = isValidLogin.isValidError(req.body);

    if (dataMessage) {
      if (dataMessage === invalidInput) {
        return res.status(401).json({ message: dataMessage });
      }
      return res.status(400).json({ message: dataMessage });
    }
    next();
  }
}
