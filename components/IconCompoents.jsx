'use client';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  setFavorites,
  setRemoveFromFavorites,
} from '@/app/redux/features/user-slice';
import { selectFavorites } from '@/app/redux/features/user-selector';

export default function IconComponent({ item }) {
  const dispatch = useDispatch();

  const addToFavorites = () => dispatch(setFavorites(item));
  const removeToFavorites = () => dispatch(setRemoveFromFavorites);
  const selectedFavorites = useSelector(selectFavorites);

  return (
    <div onClick={addToFavorites}>
      <AiFillHeart />
    </div>
  );
}
