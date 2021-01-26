import { model, Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    slug: string;
    parentId: string;
}

const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        parentId: {
            type: String
        }
    },
    { timestamps: true }
);

export default model<ICategory>('Category', UserSchema);
