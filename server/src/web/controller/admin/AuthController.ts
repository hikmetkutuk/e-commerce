import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User, { IUser } from '../../../model/User';
import config from '../../../config/config';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        await User.findOne({ email: req.body.email }, async (err: any, user: any) => {
            if (user) return res.status(400).json({ message: 'Admin already exist' });

            const body = req.body as Pick<IUser, 'firstname' | 'lastname' | 'email' | 'password'>;
            console.log(body.lastname);
            const hash_password = bcrypt.hashSync(body.password, 10);

            const _admin: IUser = new User({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                hash_password: hash_password,
                username: Math.random().toString(),
                role: 'admin'
            });
            const newUser: IUser = await _admin.save();
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
                if (validPassword && user.role === 'admin') {
                    const token = jwt.sign({ _id: user._id }, config.server.secret, { expiresIn: '1h' });

                    const { _id, firstname, lastname, fullname, email, role } = user;

                    res.status(200).json({ token, user: { _id, firstname, lastname, fullname, email, role } });
                } else {
                    return res.status(400).json({ message: 'Invalid password or user' });
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
