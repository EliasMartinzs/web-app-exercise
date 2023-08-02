'use client';
import { useRouter } from 'next/navigation';

export default function ClearUser({ isOpen, setIsOpen }) {
  const router = useRouter();

  const clearAllData = () => {
    localStorage.clear();
    router.push('/');
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={clearAllData}
      className="text-red-500 capitalize hover:underline underline-offset-4"
    >
      delete yours informations
    </button>
  );
}
