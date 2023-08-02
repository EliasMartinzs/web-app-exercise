'use client';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/app/redux/features/user-selector';

export default function SelectedUser() {
  const user = useSelector(selectCurrentUser);
  return <p className="capitalize">{user}</p>;
}
