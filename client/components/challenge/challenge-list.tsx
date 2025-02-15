"use client";

import { IChallenge } from "@/types/challenges";
import React from "react";
import ListCard from "./challenge-list-item";

type ChallengeListProps = {
    data: IChallenge[];
};

const ChallengeList = ({ data }: ChallengeListProps) => {
    return (
        <ul className="flex flex-col flex-1 my-2">
            {data.map((challenge) => (
                <li key={challenge.id} className=" w-full flex uppercase">
                    <ListCard {...challenge} className=" w-full  text-xs h-9 bg-[#121212]" variant="outline" size="lg" />
                </li>
            ))}
        </ul>
    )
};

export default ChallengeList