"use server";

import { getChallenges } from "@/services/challenges";
import { IChallenge } from "@/types/challenges";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import ChallengeList from "@/components/challenge/challenge-list";
import Hero from "@/components/hero";

import { DEFAULT_LIMIT, DEFAULT_PAGE, DEFAULT_ORDER } from "@/constants/query-params";

interface HomeProps {
  searchParams?: Promise<{ page?: string, limit?: string, sort?: keyof IChallenge, order?: "asc" | "desc" }>;
}

const Home = async (props: HomeProps) => {

  const searchParams = await props.searchParams;

  const page = parseInt(searchParams?.page || "") || DEFAULT_PAGE;
  const limit = parseInt(searchParams?.limit || "") || DEFAULT_LIMIT;
  const order = (searchParams?.order as "asc" | "desc") || DEFAULT_ORDER;

  const { data, meta } = await getChallenges(page, limit, order);

  const { page: currentPage, pageSize, total } = meta.pagination;

  return (
    <div className="flex flex-col hero h-screen">

      <Hero />

      <main className="flex flex-col flex-1 justify-between py-2">
        <ChallengeList data={data} />

        {/* solo sale si hay paginas */}

        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={total}
        />


        {/* <PaginationWithLinks page={page} pageSize={pageSize} totalCount={total} /> */}
      </main>

    </div>
  );
};

export default Home;
