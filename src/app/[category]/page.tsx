// app/[category]/page.tsx
import Card from '@/components/ui/Card';
import { getCategoryProducts } from '@/lib/api';

export async function generateStaticParams() {
  return [{ category: 'mens-clothing' }, { category: 'womens-clothing' }];
}

interface CategoryPageProps {
  params: { category: string };
}

// Ensure generateMetadata is async and handles params correctly
export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryTitle =
    params.category === 'mens-clothing' ? "Men's Clothing" : "Women's Clothing";

  return {
    title: `Modern Walk - ${categoryTitle}`, // Dynamic title for category pages
    description: `Browse ${categoryTitle} at Modern Walk.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const apiCategory =
    params.category === 'mens-clothing' ? "men's clothing" : "women's clothing";

  const products = await getCategoryProducts(apiCategory);

  const categoryTitle =
    params.category === 'mens-clothing' ? "Men's Clothing" : "Women's Clothing";

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{categoryTitle}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Revalidate every 24 hours (ISR)
export const revalidate = 86400; 