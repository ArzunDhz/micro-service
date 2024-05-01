import { NextFunction, Request, Response } from "express";

import ErrorHandler from "../../middleware/error-handeler";
import { TaskModel } from "../../models/userModel/user-model";


export const deleteTodoItem = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { id } = req.query;
        const userId = res.locals.user;

        // Check if the task exists for the given user
        const taskToDelete = await TaskModel.findOneAndDelete({ user: userId, _id: id });

        if (!taskToDelete)
        {
            return next(new ErrorHandler(false, "Task not found", 404));
        }

        res.json({ success: true, message: "Task deleted" });
    } catch (error)
    {
        next(error);
    }
};
