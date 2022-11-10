import Link from "next/link";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CocktailCard = ({ cocktail }) => {
  return (
    <Link href={`/cocktails/${slugify(cocktail.strDrink)}-${cocktail.idDrink}`}>
      <a className="rounded-md overflow-hidden bg-neutral-800 group">
        <div className="relative">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <span className="absolute w-full h-full bg-neutral-800/80 uppercase top-0 left-0 flex items-center text-center justify-center opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
            Read more
          </span>
        </div>
        <div className="flex flex-col items-center text-center py-4 px-2">
          <h3 className="font-bold text-xl">{cocktail.strDrink}</h3>
          <span className="lg:hidden uppercase text-center text-xs text-neutral-400">
            Read more
          </span>
        </div>
      </a>
    </Link>
  );
};

export default CocktailCard;
