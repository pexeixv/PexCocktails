import Head from "next/head";

export default function BaseHead({ title }) {
  title = title || "PexCocktails";
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="//gavn.in/fav" type="image/x-icon" />
    </Head>
  );
}
