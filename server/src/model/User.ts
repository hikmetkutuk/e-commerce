import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    hash_password: string;
    password: string;
    role: string;
    contact_number: string;
    profile_picture: string;
}

const UserSchema: Schema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        hash_password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        contact_number: {
            type: String
        },
        profile_picture: {
            type: String
        }
    },
    { timestamps: true }
);

UserSchema.virtual('fullname').get(function (this: any) {
    return this.firstname + ' ' + this.lastname;
});

export default model<IUser>('User', UserSchema);
