'use client';
import InputProgress from '@/components/InputProgress';
import { useFormik } from 'formik';
import { useState } from 'react';
import { userTypes } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedProgress } from '../redux/features/user-slice';
import CompareProgress from '@/components/CompareProgress';

export default function Progresso() {
  const [dataUser, setDataUser] = useState([]);
  const dispatch = useDispatch();

  class User {
    constructor(values) {
      this.values = values;
    }
  }

  const saveProgress = () => dispatch(setSavedProgress(dataUser.values));

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
    const id = timestamp + randomNum;
    return id;
  }

  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: values => {
      setDataUser(new User(values));
    },
  });

  return (
    <div className="pt-40 padding-web">
      <div className="flex-center text-center">
        <h3 className="text-xl lg:text-2xl">Meu Progresso</h3>
      </div>

      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col text-black"
        >
          {userTypes &&
            userTypes.map(user => (
              <InputProgress
                key={user.muscle}
                label={user.muscle}
                type={user.type}
                onChange={formik.handleChange}
                value={formik.values?.user?.muscle}
                name={user.muscle}
              />
            ))}
          <button type="submit">Submit</button>
          <button type="button" onClick={saveProgress}>
            save
          </button>
        </form>
      </div>
      <CompareProgress />
    </div>
  );
}
