import ReactPlay from '@/components/ReactPlay';
import { fetchByName } from '@/utils';
import React from 'react';
import ReactPlayer from 'react-player';

export default async function Searched({ params }) {
  const { query } = params;

  const searched = await fetchByName(query);

  return (
    <div>
      {Array.isArray(searched) ? (
        <>
          {searched.map(search => (
            <div className="pt-40 padding-web">
              <h3 className="text-xl mb-3 font-bold text-yellow-500 border-b capitalize">
                {search.exercise_name}
              </h3>
              <h3 className="text-sm mb-3">
                <span className="font-semibold">Difficulty</span> :{' '}
                {search.Difficulty}
              </h3>
              <div className="flex flex-col gap-y-2 lg:grid grid-cols-2 gap-2">
                <ReactPlay url={search.videoURL?.at(0)} />
                <ReactPlay url={search.videoURL?.at(1)} />
              </div>
              <div className="">
                <h3 className="text-xl mb-3 font-bold text-yellow-500 border-b capitalize">
                  Steps
                </h3>
                <p className="font-extralight text-sm lg:text-base">
                  {search.steps}
                </p>
                <div className="mt-3">
                  {search.Force ? (
                    <p className="text-sm mt-3">
                      <span className="font-semibold">Force</span> :{' '}
                      {search.Force}
                    </p>
                  ) : null}
                  {search.Grips ? (
                    <p className="text-sm">
                      <span className="font-semibold">Grips</span> :{' '}
                      {search.Grips}
                    </p>
                  ) : null}
                  {search.Category ? (
                    <p className="text-sm">
                      <span className="font-semibold">Category</span> :{' '}
                      {search.Category}
                    </p>
                  ) : null}
                  {search.target ? (
                    <p className="text-sm">
                      <span className="font-semibold">Target</span> :{' '}
                      {search.target?.Primary} - {search.target?.Secondary}*
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
