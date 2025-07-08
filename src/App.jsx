import TodoWrapper from "./components/wrapper/TodoWrapper";
import Link from "./components/link/Link";
import SEO from "./components/seo";

function App() {
  return (
    <>
      <SEO
        title="Groceries App - Smart Shopping List Manager"
        description="Organize your grocery shopping with our smart shopping list app. Create, edit, and manage your groceries efficiently. Never forget an item again!"
        keywords="groceries, shopping list, grocery app, shopping manager, food list, meal planning, grocery tracker"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Groceries App",
          description: "Smart shopping list manager for organizing groceries",
          url: window.location.origin,
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />

      <div className="App">
        <TodoWrapper />
      </div>

      <Link />
    </>
  );
}

export default App;
