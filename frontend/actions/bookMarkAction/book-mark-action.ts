import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addBookMark = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/add-bookmark`, data, { withCredentials: true });
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};

export const getAllBookMark = async (token: string) =>
{
    try
    {
        const response = await axios.get(`http://localhost:4000/api/v1/get-all-bookmark`, {
            withCredentials: true
        });
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};