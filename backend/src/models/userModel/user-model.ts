import { Schema, model } from "mongoose";
import { TaskModelType, UserModelType } from "../../types/userModelTypes/user-types";

const UserModelSchema = new Schema<UserModelType>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    emailActivated: { type: Date },
    role: { type: String, default: 'user', required: true },
});

const TaskModelSchema = new Schema<TaskModelType>({
    task: { type: String },
    createdAt: { type: Date, default: Date.now },
    title: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})


export const UserModel = model<UserModelType>('UserTable', UserModelSchema);
export const TaskModel = model<TaskModelType>('TaskTable', TaskModelSchema)