'use client';
import InputProgress from '@/components/InputProgress';
import { useFormik } from 'formik';
import { useState } from 'react';
import { userTypes } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedProgress } from '../redux/features/user-slice';
import { selectProgress } from '../redux/features/user-selector';

export default function Progresso() {
  const [dataUser, setDataUser] = useState([]);
  const dispatch = useDispatch();
  const { values } = dataUser;

  class User {
    constructor(values) {
      this.values = values;
    }
  }
  console.log(dataUser);
  const saveProgress = () => dispatch(setSavedProgress(values));

  function generateId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    const id = timestamp + randomNum;
    return id;
  }

  const formik = useFormik({
    initialValues: {
      id: generateId(),
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
      const newUser = new User(values);
      setDataUser(newUser);
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
    </div>
  );
}
