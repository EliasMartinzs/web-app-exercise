'use client';

import { options } from '@/utils';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import TargetItems from '@/components/TargetItems';

export default function Target({ params }) {
  const { name } = params;

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
        `https://musclewiki.p.rapidapi.com/exercises?category=${name}`,
        options
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full pt-40 padding-web">
      <div className="flex-center">
        <h3 className="text-xl font-black">Todos Exercícios</h3>
      </div>
      <div className="mt-5">
        {Array.isArray(currentData) ? (
          <div className="">
            {currentData.map((muscle, idx) => (
              <TargetItems key={idx} muscle={muscle} />
            ))}
          </div>
        ) : null}
      </div>
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
  );
}
