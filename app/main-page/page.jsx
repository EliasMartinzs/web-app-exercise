'use client';

import { selectMuscle } from '@/app/redux/features/user-selector';
import { options } from '@/utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllMuscle from '@/components/AllMuscle';
import MuscleItems from '@/components/MuscleItems';
import { Pagination } from '@mui/material';

export default function Exercises() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const muscleUser = useSelector(selectMuscle);

  const filtered = Array.isArray(data)
    ? data.filter(item => item.target.Primary?.at(0) === muscleUser)
    : null;

  const exercisesPerPage = 9;

  const indexLastExercise = currentPage * exercisesPerPage;
  const indexFirstExercise = indexLastExercise - exercisesPerPage;
  const currentData = Array.isArray(filtered)
    ? filtered.slice(indexFirstExercise, indexLastExercise)
    : null;

  const paginate = (_, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://musclewiki.p.rapidapi.com/exercises?muscle=${muscleUser}`,
        options
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full padding-web mt-36">
      <AllMuscle />
      {Array.isArray(currentData) ? (
        <div className="flex flex-col lg:grid grid-cols-3 gap-2">
          {currentData.map((item, idx) => (
            <MuscleItems key={idx} item={item} />
          ))}
        </div>
      ) : null}

      <div className="flex-center mt-5">
        {Array.isArray(filtered) ? (
          <>
            {filtered.length > 9 && (
              <Pagination
                variant="outlined"
                color="primary"
                shape7="rounded"
                defaultPage={1}
                count={Math.ceil(filtered.length / exercisesPerPage)}
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
