import { Request, Response } from 'express';
import bcrypt, { genSalt } from 'bcrypt';

import User, { IUser } from '../../model/User';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        await User.findOne({ email: req.body.email }, async (err: any, user: any) => {
            if (user) return res.status(400).json({ message: 'User already exist' });

            const body = req.body as Pick<IUser, 'firstname' | 'lastname' | 'email' | 'password'>;
            console.log(body.lastname);
            const hash_password = bcrypt.hashSync(body.password, 10);

            const _user: IUser = new User({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                hash_password: hash_password,
                username: Math.random().toString()
            });
            const newUser: IUser = await _user.save();
            res.status(201).json({ user: newUser });
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
