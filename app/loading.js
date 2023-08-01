import Image from 'next/image';

import loadingSvg from '../public/loading.svg';

export default function Loading() {
  return (
    <div className="w-full h-screen z-50 flex-center">
      <Image src={loadingSvg} width={200} height={200} alt="loading" />
    </div>
  );
}
