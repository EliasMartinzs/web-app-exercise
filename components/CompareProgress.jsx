'use client';

import { selectProgress } from '@/app/redux/features/user-selector';
import { useSelector } from 'react-redux';
import CheckBox from './CheckBox';
import { useState } from 'react';
import TableProgress from './TableProgress';

export default function CompareProgress() {
  const progressData = useSelector(selectProgress);
  const [progresso, setProgresso] = useState({
    progressBefore1: [],
    progressBefore2: [],
  });
  const [difference, setDifference] = useState([]);
  const [tableIsOpen, setTableIsOpen] = useState(false);

  function compararMedidas(medidasAnteriores, medidasAtuais) {
    const mudancas = {};

    for (const medida in medidasAtuais) {
      if (medidasAnteriores.hasOwnProperty(medida)) {
        if (medidasAtuais[medida] !== medidasAnteriores[medida]) {
          mudancas[medida] = {
            before: medidasAnteriores[medida],
            after: medidasAtuais[medida],
          };
        }
      }
    }

    setDifference(mudancas);
    setTableIsOpen(true);
  }

  const updateProgress = (key, id) => {
    const findedItem = progressData.find(item => item.id === id);
    setProgresso(prevProgress => ({
      ...prevProgress,
      [key]: findedItem,
    }));
  };

  return (
    <div className="w-full">
      <div className="w-full flex-center mb-2">
        <h3 className="text-base lg:text-xl">
          Escolhas as datas das quais deseja comparar.
        </h3>
      </div>
      <div className="flex-center">
        {progressData?.at(0) ? (
          <CheckBox
            progress={progressData}
            click={updateProgress}
            before="progressBefore1"
          />
        ) : (
          <p>Não há dados para comparar</p>
        )}
        {progressData?.at(1) ? (
          <CheckBox
            progress={progressData}
            click={updateProgress}
            before="progressBefore2"
          />
        ) : null}
        <div className="my-10" />
        <button
          type="button"
          className="p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
          onClick={() =>
            compararMedidas(
              progresso.progressBefore1,
              progresso.progressBefore2
            )
          }
        >
          Comparar
        </button>
      </div>
      <div className="">
        {tableIsOpen ? (
          <>
            <TableProgress difference={difference} />
          </>
        ) : null}
      </div>
    </div>
  );
}
