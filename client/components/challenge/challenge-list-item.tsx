"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type ListCardProps = {
    slug: string;
    title: string;
    documentId: string;
    className?: string;
    variant?: "outline" | "link" | "default" | "destructive" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

const ListCard = ({ slug, title, documentId, className, variant, size }: ListCardProps) => {
    return (
        <Link href={`/${slug}`} key={documentId} className={cn(buttonVariants({ variant, size, className }), "flex justify-between -m-px")}>
            <span>
                {slug}
            </span>
            <span>
                {title}
            </span>
        </Link>
    )
}

export default ListCard