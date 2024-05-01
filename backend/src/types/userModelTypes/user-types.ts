import { Document, Schema, Types } from "mongoose";

export interface UserModelType extends Document
{
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    emailActivated?: Date;
    role: string;
}

export interface TaskModelType extends Document
{
    title: string;
    task: string;
    createdAt: Date;
    user: Types.ObjectId; // Reference to UserModel
}
