"use server";

const Home = async (props: { searchParams?: { page?: string } }) => {

  return (
    <div>
      <pre>{JSON.stringify({}, null, 2)}</pre>
    </div>
  );
};

export default Home;
