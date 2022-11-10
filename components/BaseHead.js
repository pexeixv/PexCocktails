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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2535018939190913"
        crossOrigin="anonymous"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "egts9t9wnn");`,
        }}
      />
      ;
    </Head>
  );
}
