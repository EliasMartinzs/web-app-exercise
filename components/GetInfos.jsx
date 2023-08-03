'use client';

import { useState, useEffect } from 'react';
import { allMuscles } from '@/constants';
import { useDispatch } from 'react-redux';
import {
  setCurrentUser,
  setPreferMuscle,
} from '@/app/redux/features/user-slice';
import { useRouter } from 'next/navigation';

export default function GetInfos() {
  const [isOpen, setIsOpen] = useState(null);
  const [fullName, setFullName] = useState('');
  const [muscle, setMuscle] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const currentUser = () => dispatch(setCurrentUser(fullName));
  const preferMuscle = () => dispatch(setPreferMuscle(muscle));

  useEffect(() => {
    const page = () => {
      const fullname = localStorage.getItem('fullname');
      if (!fullname) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
        router.push('/main-page');
      }
    };
    page();
  }, []);

  const completeForm = e => {
    e.preventDefault();

    if (fullName && muscle) {
      currentUser();
      preferMuscle();

      setFullName('');
      setMuscle('');
      setIsOpen(!isOpen);
      localStorage.setItem('fullname', fullName);
      router.push(`/main-page`);
    } else {
      return alert('Insira os dados pedidos');
    }
  };

  return (
    <div className="w-full h-screen flex-center z-50 overflow-hidden">
      {isOpen ? (
        <div className="w-96 h-96 bg-white rounded-2xl flex-center flex-col">
          <div className="flex-center flex-col">
            <h3 className="bg-white text-black text-center text-lg font-extralight">
              Seu Nome <br />
              E
              <br />
              Seu Músculo Favorito
              <br />
              Para Melhor Experiência em nosso APP
            </h3>
          </div>
          <form
            action=""
            className="mt-2 flex-center flex-col gap-y-2 bg-white"
          >
            <input
              type="text"
              className="bg-white text-black outline-none border p-2 border-slate-400 rounded-lg"
              placeholder="Seu Nome"
              name="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
            <select
              name=""
              id=""
              className="w-40 bg-white text-black"
              onChange={e => setMuscle(e.target.value)}
              required
            >
              <option value="Select Muscle">Selecione</option>
              {allMuscles &&
                allMuscles.map(musc => (
                  <option
                    className="bg-white text-black"
                    key={musc.value}
                    value={musc.value}
                  >
                    {musc.name}
                  </option>
                ))}
            </select>
            <button
              type="button"
              onClick={completeForm}
              className="p-2 border border-slate-400 rounded-xl bg-white hover:bg-[#121522] hover:text-white transition-colors mt-5 text-black"
            >
              Pronto
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
