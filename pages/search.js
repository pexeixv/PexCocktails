import BaseHead from "../components/BaseHead";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export async function getServerSideProps(context) {
  const { query } = context;
  const searchQuery = query.query;

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
  ).then((r) => r.json());

  return {
    props: { response: JSON.parse(JSON.stringify(response.drinks)), query },
  };
}

export default function Search({ response, query }) {
  const cocktails = response;

  return (
    <>
      <BaseHead />
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-5 py-20">
          <h2 className="text-3xl lg:text-4xl text-center">
            <span className="font-bold">Search query: </span>
            <span>{query.query}</span>
          </h2>
          {!cocktails && (
            <span className="text-center block mt-8 text-lg">
              No results found! Try searching again.
            </span>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 mb-24 gap-12">
            {cocktails &&
              cocktails.map((cocktail) => (
                <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
              ))}
          </div>

          <SearchForm />
        </div>
      </section>
    </>
  );
}
