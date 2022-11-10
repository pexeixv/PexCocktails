import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral-800">
        <div className="container mx-auto px-5 py-3  justify-between flex items-center flex-col md:flex-row gap-3">
          <a href="#" className=" inline text-3xl font-black  font-bebas">
            PexCocktails
          </a>

          <div className="flex items-center gap-8 justify-center">
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
