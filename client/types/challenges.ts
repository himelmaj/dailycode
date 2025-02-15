// challenge.ts

export interface IChallenge {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    problem: string;
    code: string;
    solution: string;
    levels: "easy" | "medium" | "hard" | "expert";
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface IMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface IChallengesResponse {
    data: IChallenge[];
    meta: IMeta;
}