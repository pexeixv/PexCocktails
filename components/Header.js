import Link from "next/link";

const Header = ({ title }) => {
  title = title || "PexCocktails";
  return (
    <section>
      <div className="bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-bottom">
        <div className="bg-neutral-800/80">
          <div className="container mx-auto px-5 flex flex-col items-center py-20">
            <Link href="/">
              <a className="cursor-pointer w-fit ">
                <h1 className="inline text-5xl md:text-6xl lg:text-8xl font-black text-center font-bebas">
                  {title}
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
