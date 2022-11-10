import Head from "next/head";

export default function BaseHead({ title, description, image }) {
  title = title ? `${title} | PexCocktails` : "PexCocktails";
  description =
    description ||
    "PexCocktails is your one-stop for everything cocktail related";
  image;

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="//gavn.in/fav" type="image/x-icon" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
