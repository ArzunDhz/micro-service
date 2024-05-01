import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import env from '../utils/validate-ENV';
import { UserModel } from '../models/userModel/user-model';

export const userAuthenication = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const token = req.cookies['token'];
        console.log(token)
        if (!token) return res.status(400).json({ success: false, message: "Not logged In" });

        const decodedToken: any = jwt.verify(token, env.JWT_URL);
        console.log(decodedToken);

        if (!decodedToken || !decodedToken._id)
        {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        const userId: string = decodedToken._id;

        const user = await UserModel.findById(userId);
        if (!user)
        {
            throw new Error("User not found");
        }

        res.locals.user = userId;

    } catch (error)
    {
        next(error);
    }
    next();
};
