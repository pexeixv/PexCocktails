import SearchForm from "./SearchForm";

const SearchCocktails = () => {
  return (
    <section className="bg-slate-900 text-white">
      <div className="container mx-auto px-5 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Search Cocktails
        </h2>
        <SearchForm />
      </div>
    </section>
  );
};

export default SearchCocktails;
