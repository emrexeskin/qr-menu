import Image from 'next/image'
import Category from '@/components/category'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-32 px-2">
     <Category></Category>
     <Category></Category>
    </main>
  )
}
