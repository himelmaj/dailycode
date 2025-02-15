import "server-only";

import axios from "@/lib/axios";

import { IChallengesResponse } from "@/types/challenges";

export const getChallenges = async (
    page: number = 1, 
    limit: number = 10, 
    order: "asc" | "desc" = "desc"
): Promise<IChallengesResponse> => {

    // if (page <= 0 || limit <= 0) throw new Error("Page and limit must be positive numbers greater than zero.");
    // if (!["asc", "desc"].includes(order)) throw new Error("Invalid order. Must be either 'asc' or 'desc'.");

    try {
        const { data } = await axios.get<IChallengesResponse>(`/challenges`, {
            params: {
                pagination: {
                    page,
                    pageSize: limit,
                },
                sort: [`publishedAt:${order}`],
                fields: ["id", "title", "slug"],
            },
        });

        return data;
    } catch (error) {
        console.error("Error fetching challenges:", error);
        throw new Error("Failed to load challenges. Please try again later.");
    }
};

export const getChallenge = async (slug: string) => {
    try {
        const { data } = await axios.get(`/challenges/${slug}`);
        return data;
    } catch (error) {
        throw error;
    }
};