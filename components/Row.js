import CocktailCard from "./CocktailCard";
import IngredientCard from "./IngredientCard";

const Row = ({ title, array, card }) => {
  return (
    <section>
      <div className="container mx-auto px-5 py-20">
        <h2 className=" text-3xl lg:text-4xl font-bold text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 gap-12">
          {card == "cocktail" &&
            array.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          {card == "ingredient" &&
            array.map((ingredient) => (
              <IngredientCard key={ingredient} ingredient={ingredient} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Row;
