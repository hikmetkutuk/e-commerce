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

/*
UserSchema.virtual('password').set(function (this: any, password: string) {
    this.hash_password = bcrypt.hashSync(password, 10);
});
*/

UserSchema.methods.validatePassword = async function (this: any, password: string) {
    return bcrypt.compare(password, this.hash_password);
};

export default model<IUser>('User', UserSchema);
