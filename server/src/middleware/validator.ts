import { Request, Response, NextFunction } from 'express';
import { check, validationResult, ValidationChain } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: any = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
};

export const loginValidation = (): ValidationChain[] => {
    return [
        check('email', 'Please include a valid e-mail').isEmail(),
        check('password').isLength({ min: 6 }).withMessage('Password is too short. Please enter 6 or more character !').not().isEmpty().withMessage('Password is required !')
    ];
};

export const registerValidation = (): ValidationChain[] => {
    return [
        check('firstname', 'Firstname is required').not().isEmpty(),
        check('lastname', 'Lastname is required').not().isEmpty(),
        check('email', 'Please include a valid e-mail').isEmail(),
        check('password').isLength({ min: 6 }).withMessage('Password is too short. Please enter 6 or more character !').not().isEmpty().withMessage('Password is required !')
    ];
};
