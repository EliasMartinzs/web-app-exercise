import { allMuscles, categories } from '@/constants';
import Search from './Search';
import MuscleSelect from './MuscleSelect';
import CategoriesSelect from './CategoriesSelect';
import MyFavorites from './MyFavorites';

export default function AllMuscle() {
  return (
    <div className="w-full h-10 mt-5 flex flex-col mb-28 px-5">
      <div className="flex-start gap-x-2">
        <MuscleSelect target={allMuscles} title="Muscle" />
        <CategoriesSelect target={categories} title="Muscle" />
        {/* <MyFavorites /> */}
      </div>
      <div className="w-full pt-5 relative">
        <Search />
      </div>
    </div>
  );
}
