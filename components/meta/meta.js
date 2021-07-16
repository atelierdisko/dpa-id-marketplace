import Head from "next/head";
import React from "react";

Meta.defaultProps = {
  description:
    "Der dpa-Marketplace bietet Nachrichten- und PR-Profis wertvolle Tools für die tägliche Arbeit. Registrieren Sie sich kostenfrei für eine dpa ID und entdecken neue Produkte und Services.",
  image:
    "https://atelierdisko-17f76.kxcdn.com/cms/48831a5e-9ceb-49a8-abdd-ece09694b8ce.jpg",
};

function Meta({ title, description, robots, children }) {
  let url = null;

  if (typeof document !== "undefined") {
    url = document.location.href;
  }

  const defaultRobots = "index, follow";
  const image = "/sharing.jpeg";

  return (
    <Head>
      <meta charSet="utf-8" />

      <title>dpa marketplace | {title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={description} />
      <meta property="og:title" content={`DPA – ${title}`} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:locale" content="de_DE" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#0E26FC" />
      <meta name="robots" content={robots ? robots : defaultRobots} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          var _paq = window._paq = window._paq || [];

/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['enableLinkTracking']);
_paq.push(['disableCookies']);
_paq.push(['trackPageView']);

(function() {
    var u="https://used.dpa.com/";

    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '11']);

    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);

})();
`,
        }}
      />

      {children}
    </Head>
  );
}

export { Meta };
