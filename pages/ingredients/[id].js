import BaseHead from "../../components/BaseHead";
import CocktailCard from "../../components/CocktailCard";
import SearchCocktails from "../../components/SearchCocktails";

const shortenText = (text, length) => {
  if (text.length > length) return text.slice(0, length) + "...";
  return text;
};

export async function getServerSideProps({ params }) {
  const ingredient = params.id;
  const ingredientUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-medium.png`;

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  ).then((r) => r.json());

  const cocktails = JSON.parse(JSON.stringify(response.drinks));

  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
  ).then((res) => res.json());

  const ingredientData = JSON.parse(JSON.stringify(res.ingredients[0]));

  return {
    props: {
      ingredientData,
      cocktails,
      ingredient,
      ingredientUrl,
    },
  };
}

export default function Cocktail({
  ingredientData,
  cocktails,
  ingredient,
  ingredientUrl,
}) {
  return (
    <>
      <BaseHead title={ingredient} />
      <section>
        <div className="container mx-auto px-5 py-20 flex items-start flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex w-full justify-center lg:justify-end">
            <img
              src={ingredientUrl}
              alt={ingredient}
              className=" h-96 rounded-md"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-starts gap-5">
            <h2 className="font-bold text-5xl">{ingredient}</h2>
            <div>
              {ingredientData.strType && (
                <div>
                  <span className="font-bold">Type: </span>
                  <span>{ingredientData.strType}</span>
                </div>
              )}
              {ingredientData.strAlcohol && (
                <div>
                  <span className="font-bold">Alcohol: </span>
                  <span>{ingredientData.strAlcohol}</span>
                </div>
              )}
            </div>
            {ingredientData.strDescription && (
              <div>
                <h3 className="font-bold">Description</h3>
                <p>{shortenText(ingredientData.strDescription, 800)}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl lg:text-4xl  font-bold text-center">
          Cocktails using {ingredient}
        </h2>
        <div className="container mx-auto px-5 pb-20 pt-12 flex items-start flex-col lg:flex-row gap-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        </div>
      </section>
      <SearchCocktails />
    </>
  );
}
