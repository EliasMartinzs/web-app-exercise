'use client';

import {
  selectCurrentUser,
  selectMuscle,
} from '@/app/redux/features/user-selector';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const selectedUser = useSelector(selectCurrentUser);
  const selectedMuscle = useSelector(selectMuscle);
  const [colorChange, setColorchange] = useState(false);
  const router = useRouter();

  const name = localStorage.getItem('fullname');

  const clearAllData = () => {
    localStorage.clear();
    router.push('/');
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <header
      className={`fixed top-0 z-50 w-full py-5 padding-web transition-colors ${
        colorChange ? 'bg-[#121522] text-white' : 'bg-[#fff] text-black'
      }`}
    >
      <nav className="flex-between">
        <Link href="/main-page">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="logo"
            className="object-contain"
          />
        </Link>
        <div className="capitalize flex items-center justify-center flex-row gap-x-5">
          <p className="text-xs lg:text-lg font-black">{selectedUser}</p>{' '}
          <p className="text-xs lg:text-lg font-black">{selectedMuscle}</p>
          <div className="flex ">
            {name ? (
              <button
                onClick={clearAllData}
                className="p-2 border rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              >
                Get Out
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
