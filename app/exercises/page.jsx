'use client';
import { selectMuscle } from '@/app/redux/features/user-selector';
import { options } from '@/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AllMuscle from '@/components/AllMuscle';
import MuscleItems from '@/components/MuscleItems';

export default function Exercises() {
  const [data, setData] = useState(null);
  const muscleUser = useSelector(selectMuscle);

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
    <div className="padding-web mt-36">
      <AllMuscle />
      {Array.isArray(data) ? (
        <div className="flex flex-col lg:grid grid-cols-2 gap-2">
          {data.map((item, idx) => (
            <MuscleItems key={idx} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
