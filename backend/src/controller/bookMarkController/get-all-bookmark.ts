

import { NextFunction, Request, Response } from "express";
import { BookMarkModel } from "../../models/bookMarkModel/bookmark-model";


export const getAllBookMarks = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { pageno } = req.query
        const take = 5;
        const skip = (parseInt(pageno as string) - 1) * take;
        const userId = res.locals.user
        const allTodo = await BookMarkModel.find({ user: userId }).sort({ createdAt: -1 }).skip(skip).limit(take)
        res.json({ success: true, message: "BookMark Fetched", data: allTodo })
    } catch (error)
    {
        next(error);
    }
};
