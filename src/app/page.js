'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//server by default

export default function Home() {

  const router = useRouter()

  console.log(router);

  function handleNavigate(){
    router.push('products')
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1  sm:items-start">
        <h1>Welcome to nextJS course 2024</h1>
        <Link href={'products'}>Navigate to products page</Link>
        <Link href={'account'}>Navigate to Account page</Link>

        <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
        <button onClick={handleNavigate}>Navigate to products page using use router</button>
      </main>
       
    </div>
  );
}
