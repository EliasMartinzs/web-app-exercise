import TargetItems from '@/components/TargetItems';
import { fetchByTarget } from '@/utils';

export default async function Target({ params }) {
  const { name } = params;
  const muscles = await fetchByTarget(name);

  return (
    <div className="w-full pt-40 padding-web">
      <div className="flex-center">
        <h3 className="text-xl font-black">All Exercises {name}</h3>
      </div>
      <div className="mt-5">
        {Array.isArray(muscles) ? (
          <div className="">
            {muscles
              .filter((_, idx) => idx < 5)
              .map((muscle, idx) => (
                <TargetItems key={idx} muscle={muscle} />
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
