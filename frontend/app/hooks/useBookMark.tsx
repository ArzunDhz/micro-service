"use client"

import { useQuery } from "@tanstack/react-query"

export const useBookMark = () =>
{
    const { data, isLoading, error } = useQuery({
        queryKey: ["book-mark"],
        queryFn: async () =>
        {
            return await fetch("http://localhost:4000/api/v1/get-all-bookmark", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }).then((res) => res.json())
        },
    })
    return { data, isLoading, error }
}