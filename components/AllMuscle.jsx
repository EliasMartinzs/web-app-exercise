import { allMuscles, categories } from '@/constants';
import Search from './Search';
import MuscleSelect from './MuscleSelect';
import CategoriesSelect from './CategoriesSelect';

export default function AllMuscle() {
  return (
    <div className="w-full h-10 mt-5 flex flex-col mb-28">
      <div className="flex gap-x-5">
        <MuscleSelect target={allMuscles} title="Muscle" />
        <CategoriesSelect target={categories} title="Muscle" />
      </div>
      <div className="pt-5 relative">
        <Search />
      </div>
    </div>
  );
}
