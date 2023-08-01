'use client';

import { useState, useEffect } from 'react';

import MuscleItems from '@/components/MuscleItems';
import { options } from '@/utils';
import { Pagination } from '@mui/material';

export default function Muscle({ params }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  const newName = params.name.replace('-', ' ');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://musclewiki.p.rapidapi.com/exercises?muscle=${newName}`,
        options
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

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

  return (
    <div className="w-full pt-40 padding-web">
      <div className="flex-center">
        <h3 className="text-xl font-black">All Exercises {newName}</h3>
      </div>
      <div className="mt-5">
        {Array.isArray(currentData) ? (
          <div className="mx-auto flex flex-col lg:grid grid-cols-3 gap-2">
            {currentData.map((muscle, idx) => (
              <MuscleItems key={idx} item={muscle} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex-center mt-5">
        {Array.isArray(data) ? (
          <>
            {data.length > 9 && (
              <Pagination
                color="standard"
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
  );
}
