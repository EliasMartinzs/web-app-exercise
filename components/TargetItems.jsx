'use client';

import { setRemoveFromFavorites } from '@/app/redux/features/user-slice';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { CiCircleRemove } from 'react-icons/ci';
import AddFavorites from './AddFavorites';
import Link from 'next/link';

export default function TargetItems({ muscle }) {
  const {
    Category,
    Difficulty,
    Force,
    Grips,
    exercise_name,
    steps,
    target,
    videoURL,
    id,
  } = muscle;
  const dispatch = useDispatch();

  const removeFavorite = () => dispatch(setRemoveFromFavorites(muscle));

  return (
    <div className="lg:grid grid-cols-1 mb-10 border-b border-spacing-y-80">
      <div className="">
        <div className="flex-between">
          <Link
            href={`/exercise/${id}`}
            className="text-xl mb-3 font-bold capitalize"
          >
            {exercise_name}
          </Link>
          <button onClick={removeFavorite} className="text-4xl">
            <CiCircleRemove />
          </button>
        </div>
        <h3 className="text-sm mb-3">
          <span className="font-semibold">Difficulty</span> : {Difficulty}
        </h3>
        <div className="flex flex-col gap-y-2 lg:grid grid-cols-2 gap-2 relative">
          <ReactPlayer
            url={videoURL?.at(0)}
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            muted={true}
          />
          <ReactPlayer
            url={videoURL?.at(1)}
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            muted={true}
          />
          <div className="absolute top-3 right-3">
            <AddFavorites item={muscle} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-xl mb-3 font-bold capitalize">Steps</h4>
        <div className="flex flex-col gap-y-3">
          {steps.map((step, idx) => (
            <p key={idx} className="p-4 rounded-xl">
              <span className="p-2 rounded-full">{idx + 1}</span> {` `}
              {step}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <h4 className="text-xl mb-3 font-bold capitalize">Targets</h4>
        <div className="flex gap-x-5 mb-5">
          <p>{target?.Primary?.at(0)}</p>
          <p>{target?.Secondary?.at(0)}</p>
          <p>{target?.Tertiary?.at(0)}</p>
        </div>
      </div>
    </div>
  );
}
