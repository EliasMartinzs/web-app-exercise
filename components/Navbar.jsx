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
import Button from './Button';
import Sidebar from './Sidebar';

export default function Navbar() {
  const selectedUser = useSelector(selectCurrentUser);
  const selectedMuscle = useSelector(selectMuscle);
  const [colorChange, setColorchange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
