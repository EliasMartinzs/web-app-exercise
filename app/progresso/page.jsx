'use client';
import InputProgress from '@/components/InputProgress';
import { useState } from 'react';
import { userTypes } from '@/constants';
import { useDispatch } from 'react-redux';
import { setSavedProgress } from '../redux/features/user-slice';
import CompareProgress from '@/components/CompareProgress';

export default function Progresso() {
  const [initialValues, setInitialValues] = useState({
    id: generateId(),
    date: getDate(),
    time: getHours(),
    biceps: '',
    forearms: '',
    chest: '',
    waist: '',
    butt: '',
    quadsRight: '',
    quadsLeft: '',
    calfRight: '',
    calfLeft: '',
    shoulder: '',
  });
  const dispatch = useDispatch();

  const saveProgress = () => {
    dispatch(setSavedProgress(initialValues));

    window.location.reload();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  function getHours() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();

    if (minutes < 9) {
      return `${hours}:0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function getDate() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDay();

    return `${day}-${month}-${year}`;
  }

  function generateId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);

    return randomNum + timestamp;
  }

  return (
    <div className="pt-40 padding-web">
      <div className="w-full lg:grid grid-cols-2">
        <div className="w-full">
          <h3 className="flex-center mb-5 text-base lg:text-xl">
            Insira Suas Medias
          </h3>
          <form
            onSubmit={() => {}}
            className="w-full grid grid-cols-2 gap-3 text-black"
          >
            {userTypes &&
              userTypes.map(user => (
                <InputProgress
                  key={user.muscle}
                  name={user.muscle}
                  placeHolder={user.name}
                  onChange={handleChange}
                  type={user.type}
                />
              ))}
          </form>
          <div className="w-full flex-center my-5">
            <button
              type="button"
              className="text-white border py-2 px-5 rounded-full hover:bg-white hover:text-black transition-colors"
              onClick={saveProgress}
            >
              Salvar
            </button>
          </div>
        </div>
        <CompareProgress />
      </div>
    </div>
  );
}
