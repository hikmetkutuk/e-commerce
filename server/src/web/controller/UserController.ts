import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User, { IUser } from '../../model/User';
import config from '../../config/config';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        await User.findOne({ email: req.body.email }, async (err: any, user: any) => {
            if (user) return res.status(400).json({ message: 'User already exist' });

            const body = req.body as Pick<IUser, 'firstname' | 'lastname' | 'email' | 'password'>;
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

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        await User.findOne({ email: req.body.email }, async (err: any, user: any) => {
            if (user) {
                const validPassword = bcrypt.compareSync(req.body.password, user.hash_password);
                if (validPassword) {
                    const token = jwt.sign({ _id: user._id, role: user.role }, config.server.secret, { expiresIn: '1h' });

                    const { _id, firstname, lastname, fullname, email, role } = user;

                    return res.status(200).json({ token, user: { _id, firstname, lastname, fullname, email, role } });
                } else {
                    return res.status(400).json({ message: 'Invalid password' });
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
