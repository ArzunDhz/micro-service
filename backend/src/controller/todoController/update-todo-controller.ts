import { NextFunction, Request, Response } from "express";
import { TaskModel } from "../../models/userModel/user-model";
import ErrorHandler from "../../middleware/error-handeler";

export const updateTodo = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { id, task, title } = req.body;
        console.log(req.body)
        const userId = res.locals.user;

        const updatedTask = await TaskModel.findOneAndUpdate(
            { user: userId, _id: id },
            { task, title },
            { new: true }
        );

        if (!updatedTask)
        {
            return next(new ErrorHandler(false, "Task not found", 404));
        }

        res.json({ success: true, message: "Task updated successfully", updatedTask });
    } catch (error)
    {
        next(error);
    }
};
