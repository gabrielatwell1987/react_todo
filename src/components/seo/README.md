# SEO Component

A comprehensive SEO component for React applications that follows best practices for search engine optimization.

## Features

- **Meta Tags Management**: Automatically manages title, description, keywords, and other essential meta tags
- **Open Graph Support**: Full support for Facebook and other social media sharing
- **Twitter Cards**: Optimized for Twitter sharing with proper card types
- **Structured Data**: JSON-LD structured data support for better search engine understanding
- **Canonical URLs**: Proper canonical URL management to avoid duplicate content issues
- **Mobile Optimization**: Includes mobile-specific meta tags for better mobile experience
- **Dynamic Updates**: Updates meta tags when props change (useful for SPA routing)

## Usage

### Basic Usage

```jsx
import SEO from "./components/seo";

function MyPage() {
  return (
    <>
      <SEO
        title="My Page Title"
        description="This is my page description"
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Your page content */}
    </>
  );
}
```

### Advanced Usage with Structured Data

```jsx
import SEO from "./components/seo";
import { webApplicationSchema } from "./components/seo/schemas";

function App() {
  return (
    <>
      <SEO
        title="Groceries App - Smart Shopping List"
        description="Organize your grocery shopping efficiently"
        keywords="groceries, shopping list, todo"
        structuredData={webApplicationSchema}
        image="/og-image.jpg"
        twitterCard="summary_large_image"
      />
      {/* Your app content */}
    </>
  );
}
```

## Props

| Prop             | Type    | Default                                       | Description              |
| ---------------- | ------- | --------------------------------------------- | ------------------------ |
| `title`          | string  | 'Groceries App - Smart Shopping List Manager' | Page title               |
| `description`    | string  | Default description                           | Meta description         |
| `keywords`       | string  | Default keywords                              | Meta keywords            |
| `author`         | string  | 'Groceries App'                               | Author meta tag          |
| `image`          | string  | '/groceries.webp'                             | Social sharing image     |
| `url`            | string  | `window.location.href`                        | Canonical URL            |
| `type`           | string  | 'website'                                     | Open Graph type          |
| `siteName`       | string  | 'Groceries App'                               | Site name for Open Graph |
| `twitterCard`    | string  | 'summary_large_image'                         | Twitter card type        |
| `twitterSite`    | string  | '@groceriesapp'                               | Twitter site handle      |
| `locale`         | string  | 'en_US'                                       | Page locale              |
| `canonicalUrl`   | string  | null                                          | Custom canonical URL     |
| `noindex`        | boolean | false                                         | Prevent indexing         |
| `nofollow`       | boolean | false                                         | Prevent following links  |
| `structuredData` | object  | null                                          | JSON-LD structured data  |

## Structured Data Schemas

The component comes with pre-built schemas in `schemas.js`:

- `organizationSchema`: For organization information
- `webApplicationSchema`: For web applications
- `generateBreadcrumbSchema(breadcrumbs)`: For breadcrumb navigation
- `generateFAQSchema(faqs)`: For FAQ pages
- `generateArticleSchema(article)`: For articles/blog posts
- `generateHowToSchema(howTo)`: For how-to guides

### Example with FAQ Schema

```jsx
import { generateFAQSchema } from "./components/seo/schemas";

const faqs = [
  {
    question: "How do I add items to my grocery list?",
    answer:
      "Simply type your item in the input field and press Enter or click the Add button.",
  },
  {
    question: "Can I edit items after adding them?",
    answer: "Yes, click on any item to edit it inline or use the edit button.",
  },
];

<SEO
  title="FAQ - Groceries App"
  description="Frequently asked questions about using Groceries App"
  structuredData={generateFAQSchema(faqs)}
/>;
```

## Best Practices

1. **Unique Titles**: Ensure each page has a unique, descriptive title
2. **Description Length**: Keep descriptions between 150-160 characters
3. **Keywords**: Use relevant keywords naturally, don't stuff
4. **Images**: Always provide high-quality images for social sharing
5. **Structured Data**: Use appropriate schema types for your content
6. **Mobile**: The component automatically includes mobile optimization

## SEO Checklist

- ✅ Title tags (unique per page)
- ✅ Meta descriptions
- ✅ Meta keywords
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD)
- ✅ Mobile optimization
- ✅ Social sharing optimization
- ✅ Robots meta tags

## File Structure

```
src/components/seo/
├── SEO.jsx          # Main SEO component
├── index.js         # Export file
├── schemas.js       # Structured data schemas
├── seo.module.css   # Styles (for future use)
└── README.md        # This documentation
```
