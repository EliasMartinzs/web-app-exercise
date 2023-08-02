import { allMuscles, categories } from '@/constants';
import Search from './Search';
import MuscleSelect from './MuscleSelect';
import CategoriesSelect from './CategoriesSelect';

export default function AllMuscle() {
  return (
    <div className="w-full h-10 mt-5 flex flex-col mb-28 px-5">
      <div className="flex-start gap-x-2">
        <MuscleSelect target={allMuscles} title="Muscle" />
        <CategoriesSelect target={categories} title="Muscle" />
      </div>
      <div className="w-full pt-5 relative">
        <Search />
      </div>
    </div>
  );
}
