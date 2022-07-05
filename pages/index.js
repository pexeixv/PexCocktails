import BaseHead from "../components/BaseHead";
import Header from "../components/Header";
import Card from "../components/Card";
import SearchCocktails from "../components/SearchCocktails";

export async function getServerSideProps(context) {
  const cocktails = [];
  for (let i = 0; i < 5; i++) {
    const response = await fetch(
      "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    ).then((r) => r.json());
    cocktails.push(JSON.parse(JSON.stringify(response.drinks[0])));
  }

  return { props: { cocktails } };
}

const Home = ({ cocktails }) => {
  return (
    <>
      <BaseHead />

      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-5 py-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Random Cocktails
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 gap-12">
            {cocktails.map((cocktail) => (
              <Card key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        </div>
      </section>

      <SearchCocktails />
    </>
  );
};

export default Home;
