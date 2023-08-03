'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ClearUser({ isOpen, setIsOpen }) {
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const clearAllData = () => {
    localStorage.clear();
    router.push('/');
    setIsOpen(!isOpen);
    setAlert(!alert);
  };

  const AlertDeleteUser = () => {
    return (
      <div className="absolut flex-center flex-col w-full h-28 bg-[#101820ff] text-xl font-black transition-colors">
        <p>Tem Certeza Que Deseja Limpar Seus Dados ?</p>
        <div className="flex-center gap-x-10">
          <button
            className="hover:underline underline-offset-4 hover:text-white"
            onClick={() => setAlert(!alert)}
          >
            Não
          </button>
          <button
            className="hover:underline underline-offset-4 hover:text-white"
            onClick={clearAllData}
          >
            Sim
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="text-red-500 capitalize hover:underline underline-offset-4">
      <button onClick={() => setAlert(!alert)}>limpar</button>
      {alert ? <AlertDeleteUser /> : null}
    </div>
  );
}
