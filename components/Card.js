import Link from "next/link";

const Card = ({ cocktail }) => {
  return (
    <Link href={`/cocktails/${cocktail.idDrink}`}>
      <a className="rounded-md overflow-hidden bg-slate-800 group">
        <div className="relative">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <span className="absolute w-full h-full bg-slate-800/80 uppercase top-0 left-0 flex items-center text-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            Read more
          </span>
        </div>
        <div className="flex flex-col items-center text-center py-4 px-2">
          <h3 className="font-cold text-xl">{cocktail.strDrink}</h3>
        </div>
      </a>
    </Link>
  );
};

export default Card;
