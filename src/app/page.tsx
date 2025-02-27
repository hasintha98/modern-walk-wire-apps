// app/page.tsx
import Card from '@/components/ui/Card';
import CategoryButton from '@/components/layout/CategoryButton';
import { getFlashSaleProducts } from '@/lib/api';

export default async function Home() {
  const products = await getFlashSaleProducts(); 

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Flash Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CategoryButton title="Men’s Clothing" href="/mens-clothing" bgColor="bg-green-500" />
        <CategoryButton title="Women’s Clothing" href="/womens-clothing" bgColor="bg-pink-500" />
      </section>
    </div>
  );
}