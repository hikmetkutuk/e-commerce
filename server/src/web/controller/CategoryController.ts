import { Request, Response } from 'express';
import slugify from 'slugify';

import Category, { ICategory } from '../../model/Category';

export const store = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ICategory, 'name' | 'parentId'>;

        const category: ICategory = new Category({
            name: body.name,
            slug: slugify(body.name)
        });

        if (body.parentId) {
            category.parentId = body.parentId;
        }

        const newCategory: ICategory = await category.save();
        res.status(201).json({ category: newCategory });
    } catch (err) {
        res.status(500).send(err);
    }
};
