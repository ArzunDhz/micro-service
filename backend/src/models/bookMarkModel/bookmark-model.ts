
import { Schema, Types, model } from "mongoose";
import { BookMarkModelType } from "../../types/bookMardModelTypes/book-mark-types";


const BookMarkModelSchema = new Schema<BookMarkModelType>({
    budget: { type: Number },
    genres: { type: String },
    homepage: { type: String },
    keywords: { type: String },
    original_language: { type: String },
    original_title: { type: String },
    overview: { type: String },
    popularity: { type: Number },
    release_date: { type: String },
    revenue: { type: Number },
    runtime: { type: Number },
    status: { type: String },
    tagline: { type: String },
    vote_average: { type: Number },
    vote_count: { type: Number },
    cast: { type: String },
    director: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    imageUrl: { type: String }
});

export const BookMarkModel = model<BookMarkModelType>('BookMarkTable', BookMarkModelSchema);
