'use client';

import Link from 'next/link';
import ReactPlay from './ReactPlay';
import AddFavorites from './AddFavorites';

export default function MuscleItems({ item }) {
  const { Category, Difficulty, videoURL, Grips, exercise_name, id } = item;

  return (
    <div className="w-full p-2 text-sm mb-5 rounded-2xl">
      <div className="relative">
        <ReactPlay url={videoURL[0]} />
        <h3 className="absolute top-2 right-2 text-3xl cursor-pointer hover:text-red-500">
          <AddFavorites item={item} />
        </h3>
      </div>
      <Link
        href={`/exercise/${id}`}
        className="flex flex-col gap-y-3 z-50 hover-fav py-5"
      >
        <div className="flex-between">
          <p className="hover-underline">{exercise_name}</p>
          <p>{Grips}</p>
        </div>
        <div className="flex-between">
          <p>Difficulty: {Difficulty}</p>
          <p>Category: {Category}</p>
        </div>
      </Link>
    </div>
  );
}
