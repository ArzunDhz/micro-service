import { Document, Schema, model } from "mongoose";

export interface UserModelType extends Document
{
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    emailActivated?: Date;
    role: string;
    accountDetails?: Schema.Types.ObjectId | AccountDetailsModelType;
}

export interface AccountDetailsModelType extends Document
{
    nickname?: string;
    organizatonAddress?: string;
    organizationName?: string;
    position?: string;
    workEmail?: string;
    homeAddress?: string;
    phoneNumbers?: string[];
    externalLinks?: string[];
    profilePicture?: string;
    coverPicture?: string;
    connections?: Schema.Types.ObjectId[] | [];
    socialUrls?: Schema.Types.ObjectId | SocialUrlsModelType;
}

export interface SocialUrlsModelType
{
    whatsapp?: string;
    viber?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    behance?: string;
    github?: string;
    dribbble?: string;
    pinterest?: string;
    tiktok?: string;
    thread?: string;
    linkedin?: string;
    discord?: string;
    wechat?: string;
}