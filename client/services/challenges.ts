import "server-only";

import axios from "@/lib/axios";
import { IChallengesResponse, IChallengeSlug } from "@/types";
import { DEFAULT_LIMIT, DEFAULT_ORDER, DEFAULT_PAGE } from "@/constants/query-params";

export const getChallenges = async (page: number = DEFAULT_PAGE, limit: number = DEFAULT_LIMIT, order: "asc" | "desc" = DEFAULT_ORDER): Promise<IChallengesResponse> => {
    const res = await axios.get<IChallengesResponse>("/challenges", {
        params: {
            pagination: {
                page,
                pageSize: limit,
            },
            sort: [`publishedAt:${order}`],
            fields: ["id", "title", "slug"],
        },
    });

    if (!res.data) {
        throw new Error("Failed to fetch challenges");
    }

    return res.data;


};

export const getChallenge = async (slug: string) => {
    // try {

    // } catch (error) {
    //     return error
    // }
    const { data } = await axios.get<IChallengeSlug>(`/challenges/${slug}`);
    return data;
};