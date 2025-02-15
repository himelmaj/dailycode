"use server";

import { getChallenges } from "@/services/challenges";
import { IChallenge } from "@/types/challenges";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import ChallengeList from "@/components/challenge/challenge-list";
import Hero from "@/components/hero";

interface HomeProps {
  searchParams?: Promise<{ page?: string, limit?: string, sort?: keyof IChallenge, order?: "asc" | "desc" }>;
}

const Home = async (props: HomeProps) => {

  const searchParams = await props.searchParams;

  const paramPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const limit = searchParams?.limit ? parseInt(searchParams.limit) : 10;
  // const sort = searchParams?.sort ? searchParams.sort : "publishedAt";
  const order = searchParams?.order ? searchParams.order : "desc";

  const { data, meta } = await getChallenges(paramPage, limit, order);

  const { page, pageSize, total } = meta.pagination;

  return (
    <div className="flex flex-col hero h-screen">

      <Hero />

      <main className="flex flex-col flex-1 justify-between py-2">
        <ChallengeList data={data} />

        {/* solo sale si hay paginas */}

        {
          (total > 0 && pageSize !== total) && (
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={total}
            />
          )
        }


        {/* <PaginationWithLinks page={page} pageSize={pageSize} totalCount={total} /> */}
      </main>

    </div>
  );
};

export default Home;
