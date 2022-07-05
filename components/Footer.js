import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900">
      <div className="container mx-auto px-5 py-3 font-bold justify-between flex items-center">
        <a href="//www.thecocktaildb.com" target="_blank" rel="noreferrer">
          <img src="/TheCocktailDB.png" alt="TheCocktailDB" className="h-8" />
        </a>
        <a
          href="//gavn.in"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <img src="/code.svg" alt="Developed" className="h-6 mr-3" />
          by Gavin Pereira
        </a>
      </div>
    </footer>
  );
}
