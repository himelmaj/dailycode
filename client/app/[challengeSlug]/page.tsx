"use server";

import { getChallenge } from "@/services/challenges";
import { notFound } from "next/navigation";

const Challenge = async ({ params }: { params: Promise<{ challengeSlug: string }> }) => {

  const slug = (await params).challengeSlug

  const challenge = await getChallenge(slug)

  
  if (!challenge) {
    return notFound()
  }

  return (
    <div>

      <div>Challenge: {slug}</div>
      <pre>
        {JSON.stringify(challenge, null, 2)}
      </pre>
    </div>
  )
}

export default Challenge