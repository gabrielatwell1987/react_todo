import { useEffect } from "react";

/**
 * Custom hook for managing SEO meta tags
 * Use this hook when you need more control over when SEO updates happen
 */
export const useSEO = (seoConfig) => {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      image,
      url = window.location.href,
      type = "website",
      siteName = "Groceries App",
      canonicalUrl,
    } = seoConfig;

    // Update document title
    if (title) {
      document.title = title;
    }

    // Helper function to update meta tags
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

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);

    // Update canonical URL
    const canonicalHref = canonicalUrl || url;
    updateLinkTag("canonical", canonicalHref);
  }, [seoConfig]);
};

/**
 * Hook for managing structured data
 */
export const useStructuredData = (structuredData, id = "structured-data") => {
  useEffect(() => {
    if (!structuredData) return;

    let script = document.querySelector(`#${id}`);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(`#${id}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [structuredData, id]);
};
