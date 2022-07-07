import BaseHead from "../components/BaseHead";
import SearchCocktails from "../components/SearchCocktails";
import Row from "../components/Row";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export async function getServerSideProps(context) {
  const cocktails = [];
  for (let i = 0; i < 5; i++) {
    const response = await fetch(
      "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    ).then((r) => r.json());
    cocktails.push(JSON.parse(JSON.stringify(response.drinks[0])));
  }

  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  ).then((r) => r.json());
  const ingredientArray = res.drinks.map((obj) => obj.strIngredient1);

  const ingredients = JSON.parse(
    JSON.stringify(getMultipleRandom(ingredientArray, 5))
  );

  return { props: { cocktails, ingredients } };
}

const Home = ({ cocktails, ingredients }) => {
  console.log(
    "🚀 ~ file: index.js ~ line 32 ~ Home ~ ingredients",
    ingredients
  );
  return (
    <>
      <BaseHead />

      <Row title="Random Cocktails" array={cocktails} card={"cocktail"} />

      <Row title="Random Ingredients" array={ingredients} card={"ingredient"} />

      <SearchCocktails />
    </>
  );
};

export default Home;
