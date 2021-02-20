import { Request, Response } from 'express';
import slugify from 'slugify';

import Category, { ICategory } from '../../model/Category';

export const index = async (req: Request, res: Response) => {
    try {
        const categories: ICategory[] = await Category.find();
        const categoryList = create(categories);
        return res.status(200).json({ categoryList });
    } catch (err) {
        return res.send(err);
    }
};

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


const create = function (categories: any[], parentId: any = null): any {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(c => c.parentId == undefined);
    }
    else {
        category = categories.filter(c => c.parentId == parentId);
    }

    for (let c of category) {
        categoryList.push({
            _id: c._id,
            name: c.name,
            slug: c.slug,
            children: create(categories, c._id)
        });
    }

    return categoryList;
}