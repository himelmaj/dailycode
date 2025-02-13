"use server";

const Challenge = async ({ params }: { params: Promise<{ challengeSlug: string }>}) => {
  const slug = (await params).challengeSlug
  return (
    <div>Challenge: {slug}</div>
  )
}

export default Challenge