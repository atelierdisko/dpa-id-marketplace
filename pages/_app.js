import "../styles/globals/index.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const html = document.documentElement;
    let scrollTimeout;

    const debouncedRemoveSmoothScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        html.style.removeProperty("scroll-behavior");
      }, 100);
    };

    const handleHashChangeStart = () => {
      html.style.setProperty("scroll-behavior", "smooth", "important");
      debouncedRemoveSmoothScroll();
    };

    const handleRouteChangeStart = () => {
      html.style.removeProperty("scroll-behavior");
    };

    const handleScroll = () => {
      debouncedRemoveSmoothScroll();
    };

    router.events.on("hashChangeStart", handleHashChangeStart);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(scrollTimeout);
      router.events.off("hashChangeStart", handleHashChangeStart);
      router.events.off("routeChangeStart", handleRouteChangeStart);
      window.removeEventListener("scroll", handleScroll);
      html.style.removeProperty("scroll-behavior");
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
