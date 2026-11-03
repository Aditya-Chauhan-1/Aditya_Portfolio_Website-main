import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeo, seo } from "../data/seo";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pageSeo[pathname] || pageSeo["/"];
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", page.canonical);
    setMeta('meta[property="og:url"]', "content", page.canonical);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
    setMeta('meta[property="og:image"]', "content", seo.image);
    setMeta('meta[name="twitter:image"]', "content", seo.image);
  }, [pathname]);

  return null;
};

export default Seo;
