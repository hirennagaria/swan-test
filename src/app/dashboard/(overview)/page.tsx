import CardWrapper, { PostsCard } from "@/app/ui/dashboard/cards";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Home
      </h1>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1">
      <h1 className={`${lusitana.className} mb-4 text-lg md:text-xl`}>
        Latest Posts
      </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <PostsCard />
        </div>
      </div>
    </main>
  );
}
