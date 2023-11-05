import { categories } from '@/lib/data';
import Category from '@/components/category'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-32 px-2">
      {categories.map((category, index) => (
        <Category key={index} category={category} name={category.name} hash={category.hash} />
      ))}
    </main>
  );
}