import { Suspense } from 'react';
import ImageSearchPage from './page';
import { useSearchParams } from 'next/navigation';

export default function ImageSearch(props) {
    const searchParams = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageSearchPage props={searchParams} />
    </Suspense>
  );
}



