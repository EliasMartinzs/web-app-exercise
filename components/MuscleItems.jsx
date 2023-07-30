'use client';

export default function MuscleItems({ item }) {
  const { Category, Difficulty, videoURL, Grips, exercise_name } = item;

  return (
    <div className="w-full p-2 text-sm shadow-xl rounded-xl">
      <video src={videoURL} width={500} height={500} />
      <div className="flex flex-col gap-y-3 mt-3">
        <div className="flex-between">
          <p>{exercise_name}</p>
          <p>{Grips}</p>
        </div>
        <div className="flex-between">
          <p>Difficulty: {Difficulty}</p>
          <p>Category: {Category}</p>
        </div>
      </div>
    </div>
  );
}
