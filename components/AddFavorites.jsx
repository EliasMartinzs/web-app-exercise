'use client';
import { useDispatch } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { setFavorites } from '@/app/redux/features/user-slice';

export default function AddFavorites({ item }) {
  const dispatch = useDispatch();

  const addToFavorites = () => dispatch(setFavorites(item));

  return (
    <div onClick={addToFavorites} className="cursor-pointer z-50 text-2xl">
      <AiFillHeart />
    </div>
  );
}
