'use client';

import { useSelector } from 'react-redux';
import { selectMuscle } from '@/app/redux/features/user-selector';

export default function SelectedMuscleUser() {
  const muscle = useSelector(selectMuscle);
  return <p className="capitalize">{muscle}</p>;
}
