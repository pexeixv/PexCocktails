import BaseHead from "../../components/BaseHead";
import Header from "../../components/Header";
import Link from "next/link";
import SearchCocktails from "../../components/SearchCocktails";

export async function getServerSideProps({ params }) {
  const cocktailId = params.id;
  const cocktail = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  ).then((r) => r.json());

  return {
    props: {
      cocktail,
    },
  };
}

export default function Cocktail({ cocktail }) {
  cocktail = cocktail.drinks[0];
  const ingredients = [];
  for (let i = 1; i <= 15; i++)
    if (cocktail[`strIngredient${i}`])
      ingredients.push(cocktail[`strIngredient${i}`]);

  return (
    <>
      <BaseHead title={cocktail.strDrink} />
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-5 py-20 flex items-start flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex w-full justify-center lg:justify-end">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className=" h-96 rounded-md"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-starts gap-5">
            <h2 className="font-bold text-5xl">{cocktail.strDrink}</h2>
            <div>
              <span className="block">
                <span className="font-bold">Category: </span>{" "}
                {cocktail.strCategory}
              </span>
              <span className="block">
                <span className="font-bold">Glass: </span> {cocktail.strGlass}
              </span>
            </div>
            <p>{cocktail.strInstructions}</p>
            <div>
              <h3>Ingredients</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {ingredients.map((ing) => (
                  <Link key={ing} href={`/ingredients/${ing}`}>
                    <a className="py-1 px-2 bg-slate-800 rounded-sm rounded flex flex-col items-center gap-2">
                      <img
                        src={`https://www.thecocktaildb.com/images/ingredients/${ing}-small.png`}
                        alt={ing}
                      />
                      <span className="text-center">{ing}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SearchCocktails />
    </>
  );
}
