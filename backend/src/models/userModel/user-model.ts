import { Schema, model } from "mongoose";
import { AccountDetailsModelType, SocialUrlsModelType, UserModelType } from "../../types/userModelTypes/user-types";

const UserModelSchema = new Schema<UserModelType>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    emailActivated: { type: Date },
    role: { type: String, default: 'user', required: true },
    accountDetails: { type: Schema.Types.ObjectId, ref: 'AccountDetails' },
});

const AccountDetailsSchema = new Schema<AccountDetailsModelType>({
    nickname: { type: String },
    organizatonAddress: { type: String },
    organizationName: { type: String },
    position: { type: String },
    workEmail: { type: String },
    homeAddress: { type: String },
    phoneNumbers: { type: [String] },
    externalLinks: { type: [String] },
    profilePicture: { type: String },
    coverPicture: { type: String },
    connections: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    socialUrls: { type: Schema.Types.ObjectId, ref: 'SocialUrls' },
});

const SocialUrlsSchema = new Schema<SocialUrlsModelType>({
    whatsapp: { type: String },
    viber: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    behance: { type: String },
    github: { type: String },
    dribbble: { type: String },
    pinterest: { type: String },
    tiktok: { type: String },
    thread: { type: String },
    linkedin: { type: String },
    discord: { type: String },
    wechat: { type: String },
});

export const UserModel = model<UserModelType>('UserTable', UserModelSchema);
export const AccountDetailsModel = model<AccountDetailsModelType>('AccountDetailsTable', AccountDetailsSchema);
export const SocialUrlsModel = model<SocialUrlsModelType>('SocialUrlsTable', SocialUrlsSchema)