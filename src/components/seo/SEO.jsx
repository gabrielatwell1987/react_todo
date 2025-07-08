import { useEffect } from "react";
import PropTypes from "prop-types";

const SEO = ({
  title = "Groceries App - Smart Shopping List Manager",
  description = "Organize your grocery shopping with our smart shopping list app. Create, edit, and manage your groceries efficiently.",
  keywords = "groceries, shopping list, todo list, grocery app, shopping manager, food list",
  author = "Groceries App",
  image = "/groceries.webp",
  url = window.location.href,
  type = "website",
  siteName = "Groceries App",
  twitterCard = "summary_large_image",
  twitterSite = "@groceriesapp",
  locale = "en_US",
  canonicalUrl = null,
  noindex = false,
  nofollow = false,
  structuredData = null,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      if (!content) return;

      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const updateLinkTag = (rel, href) => {
      if (!href) return;

      let link = document.querySelector(`link[rel="${rel}"]`);

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }

      link.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag(
      "robots",
      `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`
    );

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);
    updateMetaTag("og:locale", locale, true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:site", twitterSite);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Additional SEO meta tags
    updateMetaTag("theme-color", "#4f46e5");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "default");
    updateMetaTag("apple-mobile-web-app-title", siteName);

    // Canonical URL
    const canonicalHref = canonicalUrl || url;
    updateLinkTag("canonical", canonicalHref);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector("#structured-data");
      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // We don't clean up meta tags on unmount as they should persist
      // across route changes for better SEO
    };
  }, [
    title,
    description,
    keywords,
    author,
    image,
    url,
    type,
    siteName,
    twitterCard,
    twitterSite,
    locale,
    canonicalUrl,
    noindex,
    nofollow,
    structuredData,
  ]);

  // This component doesn't render anything visible
  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  siteName: PropTypes.string,
  twitterCard: PropTypes.string,
  twitterSite: PropTypes.string,
  locale: PropTypes.string,
  canonicalUrl: PropTypes.string,
  noindex: PropTypes.bool,
  nofollow: PropTypes.bool,
  structuredData: PropTypes.object,
};

export default SEO;
