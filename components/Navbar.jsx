"use client";

import {
  selectCurrentUser,
  selectMuscle,
} from "@/app/redux/features/user-selector";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Navbar() {
  const selectedUser = useSelector(selectCurrentUser);
  const selectedMuscle = useSelector(selectMuscle);

  return (
    <header className="fixed top-0 z-50 w-full py-5 padding-web">
      <nav className="flex-between">
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="logo"
          className="object-contain"
        />
        <div className="capitalize">
          <p className="text-lg">
            {selectedUser} - {selectedMuscle}
          </p>
        </div>
      </nav>
    </header>
  );
}
