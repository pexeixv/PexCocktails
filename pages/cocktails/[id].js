import BaseHead from "../../components/BaseHead";
import Link from "next/link";
import SearchCocktails from "../../components/SearchCocktails";

export async function getServerSideProps({ params }) {
  const query = params.id;
  const queryString = query.split("-");
  const cocktailId = queryString[queryString.length - 1];
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
      ingredients.push({
        name: cocktail[`strIngredient${i}`],
        measure: cocktail[`strMeasure${i}`],
      });

  return (
    <>
      <BaseHead title={cocktail.strDrink} />
      <section>
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
                <span className="font-bold">Category: </span>
                {cocktail.strCategory}
              </span>
              <span className="block">
                <span className="font-bold">Glass: </span> {cocktail.strGlass}
              </span>
            </div>
            <div>
              <h3 className="font-bold">Instructions</h3>
              <p>{cocktail.strInstructions}</p>
            </div>
            <div>
              <h3 className="font-bold">Ingredients</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {ingredients.map((ing) => (
                  <Link key={ing.name} href={`/ingredients/${ing.name}`}>
                    <a className="p-3 bg-neutral-800 rounded-sm rounded flex flex-col items-center">
                      <img
                        src={`https://www.thecocktaildb.com/images/ingredients/${ing.name}-small.png`}
                        alt={ing.name}
                      />
                      <span className="mt-2 text-center">{ing.name}</span>
                      <span className="text-center text-xs italic">
                        {ing.measure}
                      </span>
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
