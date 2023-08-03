'use client';

import ReactPlay from '@/components/ReactPlay';

import { options } from '@/utils';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';

export default function Searched({ params }) {
  const { query } = params;

  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexLastExercise = currentPage * exercisesPerPage;
  const indexFirstExercise = indexLastExercise - exercisesPerPage;
  const currentData = Array.isArray(data)
    ? data.slice(indexFirstExercise, indexLastExercise)
    : null;

  const paginate = (_, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://musclewiki.p.rapidapi.com/exercises?name=${query}`,
        options
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {Array.isArray(currentData) ? (
        <>
          {currentData.map((search, idx) => (
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
      <div className="flex-center mt-5">
        {Array.isArray(data) ? (
          <>
            {data.length > 9 && (
              <Pagination
                variant="outlined"
                color="primary"
                shape7="rounded"
                defaultPage={1}
                count={Math.ceil(data.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </>
        ) : null}
      </div>
    </div>
    // <div>
    //   {Array.isArray(searched) ? (
    //     <>
    //       {searched.map(search => (
    //         <div className="pt-40 padding-web">
    //           <h3 className="text-xl mb-3 font-bold text-yellow-500 border-b capitalize">
    //             {search.exercise_name}
    //           </h3>
    //           <h3 className="text-sm mb-3">
    //             <span className="font-semibold">Difficulty</span> :{' '}
    //             {search.Difficulty}
    //           </h3>
    //           <div className="flex flex-col gap-y-2 lg:grid grid-cols-2 gap-2">
    //             <ReactPlay url={search.videoURL?.at(0)} />
    //             <ReactPlay url={search.videoURL?.at(1)} />
    //           </div>
    //           <div className="">
    //             <h3 className="text-xl mb-3 font-bold text-yellow-500 border-b capitalize">
    //               Steps
    //             </h3>
    //             <p className="font-extralight text-sm lg:text-base">
    //               {search.steps}
    //             </p>
    //             <div className="mt-3">
    //               {search.Force ? (
    //                 <p className="text-sm mt-3">
    //                   <span className="font-semibold">Force</span> :{' '}
    //                   {search.Force}
    //                 </p>
    //               ) : null}
    //               {search.Grips ? (
    //                 <p className="text-sm">
    //                   <span className="font-semibold">Grips</span> :{' '}
    //                   {search.Grips}
    //                 </p>
    //               ) : null}
    //               {search.Category ? (
    //                 <p className="text-sm">
    //                   <span className="font-semibold">Category</span> :{' '}
    //                   {search.Category}
    //                 </p>
    //               ) : null}
    //               {search.target ? (
    //                 <p className="text-sm">
    //                   <span className="font-semibold">Target</span> :{' '}
    //                   {search.target?.Primary} - {search.target?.Secondary}*
    //                 </p>
    //               ) : null}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </>
    //   ) : null}
    //   <Teste muscles={searched} />
    // </div>
  );
}
