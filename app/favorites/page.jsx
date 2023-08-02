'use client';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/features/user-selector';
import TargetItems from '@/components/TargetItems';

export default function Favorites() {
  const data = useSelector(selectFavorites);

  return (
    <div className="pt-40 padding-web">
      <h3 className="flex-center text-2xl font-black">Favorites</h3>
      {Array.isArray(data) ? (
        <>
          {data.map(muscle => (
            <TargetItems key={muscle.id} muscle={muscle} />
          ))}
        </>
      ) : null}
    </div>
  );
}
