

import { NextFunction, Request, Response } from "express";
import { TaskModel } from "../../models/userModel/user-model";

export const getAllTodo = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { pageno } = req.query
        const take = 5;
        const skip = (parseInt(pageno as string) - 1) * take;
        const userId = res.locals.user
        const allTodo = await TaskModel.find({ user: userId }).sort({ createdAt: -1 }).skip(skip).limit(take)
        res.json({ success: true, message: "Task Fetched", data: allTodo })
    } catch (error)
    {
        next(error);
    }
};
