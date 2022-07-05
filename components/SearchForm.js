import { useRouter } from "next/router";

export default function SearchForm() {
  return (
    <form
      action="/search/"
      method="GET"
      className="py-16 mx-auto flex flex-col items-center gap-2"
    >
      <input
        type="text"
        name="query"
        className="text-black rounded p-2 w-9/12 max-w-xl"
        placeholder="Tea"
      />
      <label htmlFor="query"></label>
      <input
        type="submit"
        value="Search"
        className="bg-white text-black px-4 py-2 rounded font-bold"
      />
    </form>
  );
}
