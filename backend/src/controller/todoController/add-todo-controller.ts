import { NextFunction, Request, Response } from "express";
import { TaskModel } from "../../models/userModel/user-model";

export const addTodoItem = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { title, task } = req.body;

        console.log(title)
        const userId = res.locals.user
        const addTask = await TaskModel.create({
            task,
            title,
            user: userId
        })
        console.log(addTask)
        res.json({ success: true, message: "Task Added" })
    } catch (error)
    {
        next(error);
    }
};
