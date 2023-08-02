'use client';

import { options } from '@/utils';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Execise({ params }) {
  const [data, setData] = useState([]);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://musclewiki.p.rapidapi.com/exercises/${id}`,
        options
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  const {
    Category,
    Difficulty,
    Force,
    Grips,
    exercise_name,
    steps,
    target,
    videoURL,
  } = data;

  console.log(videoURL);

  return (
    <div className="pt-40 padding-web">
      <h3 className="text-xl mb-3 font-bold border-b capitalize">
        {exercise_name}
      </h3>
      <h3 className="text-sm mb-3">
        <span className="font-semibold">Difficulty</span> : {Difficulty}
      </h3>
      <div className="flex flex-col gap-y-2 lg:grid grid-cols-2 gap-2">
        <ReactPlayer
          url={videoURL?.at(0) && videoURL?.at(1)}
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
      </div>
      <div className="mt-5">
        <h3 className="text-xl mb-3 font-bold border-b capitalize">Steps</h3>
        <p className="font-extralight text-sm lg:text-base">{steps}</p>
        <div className="mt-3">
          {Force ? (
            <p className="text-sm mt-3">
              <span className="font-semibold">Force</span> : {Force}
            </p>
          ) : null}
          {Grips ? (
            <p className="text-sm">
              <span className="font-semibold">Grips</span> : {Grips}
            </p>
          ) : null}
          {Category ? (
            <p className="text-sm">
              <span className="font-semibold">Category</span> : {Category}
            </p>
          ) : null}
          {target ? (
            <p className="text-sm">
              <span className="font-semibold">Target</span> : {target?.Primary}{' '}
              - {target?.Secondary}*
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
