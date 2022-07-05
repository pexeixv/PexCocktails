import BaseHead from "../../components/BaseHead";
import Header from "../../components/Header";
import Card from "../../components/Card";
import SearchCocktails from "../../components/SearchCocktails";

export async function getServerSideProps({ params }) {
  const ingredient = params.id;
  const ingredientUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-medium.png`;

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  ).then((r) => r.json());

  return {
    props: {
      response: JSON.parse(JSON.stringify(response)),
      ingredient,
      ingredientUrl,
    },
  };
}

export default function Cocktail({ response, ingredient, ingredientUrl }) {
  const cocktails = response.drinks;
  return (
    <>
      <BaseHead title={ingredient} />
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-5 py-20 flex items-center flex-col  gap-4">
          <div className="lg:w-1/2 w-full flex flex-col items-starts gap-5">
            <h2 className="font-bold text-center text-3xl lg:text-4xl">
              {ingredient}
            </h2>
          </div>
          <img
            src={ingredientUrl}
            alt={ingredient}
            className=" h-96 rounded-md"
          />
        </div>
      </section>
      <section className="bg-slate-900 text-white">
        <h2 className="text-3xl lg:text-4xl  font-bold text-center">
          Cocktails using {ingredient}
        </h2>
        <div className="container mx-auto px-5 pb-20 pt-12 flex items-start flex-col lg:flex-row gap-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {cocktails.map((cocktail) => (
              <Card key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        </div>
      </section>
      <SearchCocktails />
    </>
  );
}
