import SearchForm from "@/components/SearchForm";
import StartupCard from "../components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAd: new Date(),
      views: 55,
      author: {_id: 1, name: "ekin"},
      description: "this is a description.",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
      category: "Robots",
      title: "We Robots",
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query}></SearchForm>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"`: "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) =>(
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found.</p>
          )}
        </ul>

      </section>
    </>
  );
};

export default Home;
