import { NextFunction, Request, Response } from "express";

import ErrorHandler from "../../middleware/error-handeler";
import { TaskModel } from "../../models/userModel/user-model";
import { BookMarkModel } from "../../models/bookMarkModel/bookmark-model";


export const deleteBookMark = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { id } = req.query;
        const userId = res.locals.user;

        // Check if the task exists for the given user
        const bookMakrToDelete = await BookMarkModel.findOneAndDelete({ user: userId, _id: id });

        if (!bookMakrToDelete)
        {
            return next(new ErrorHandler(false, "BookMark not found", 404));
        }

        res.json({ success: true, message: "BookMark deleted" });
    } catch (error)
    {
        next(error);
    }
};
