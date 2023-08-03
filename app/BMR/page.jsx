'use client';

import ButtonForms from '@/components/ButtonForms';
import { optionsCalculator } from '@/utils';
import { useState } from 'react';

export default function BMR() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bmr, setBmr] = useState([]);

  const { info } = bmr;

  const clearFields = e => {
    e.preventDefault();
    setHeight('');
    setWeight('');
    setBmr('');
    setAge('');
    setGender('');
  };

  const calcBMI = e => {
    e.preventDefault();

    fetchData(weight, height, gender, age);
  };

  const fetchData = async (weight, height, gender, age) => {
    const response = await fetch(
      `https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`,
      optionsCalculator
    );

    const data = await response.json();

    setBmr(data);
  };

  return (
    <div className="pt-40 w-full padding-web overflow-hidden">
      <h3 className="text-2xl font-black">Taxa Metabólica Basal</h3>
      <div className="flex flex-col lg:grid grid-cols-2">
        <form className="w-96 py-10 flex flex-col gap-y-3 text-black">
          <div className="relative">
            <input
              type="number"
              placeholder="Peso"
              className="w-80 lg:w-full py-3 px-2 bg-slate-100 rounded-xl outline-none"
              name="weight"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
            <small className="text-slate-500 absolute top-3 right-2">Kg</small>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Altura"
              className="w-80 lg:w-full py-3 px-2 bg-slate-100 rounded-xl outline-none"
              name="height"
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <small className="text-slate-500 absolute top-3 right-2">Cm</small>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Idade"
              className="w-80 lg:w-full py-3 px-2 bg-slate-100 rounded-xl outline-none"
              name="age"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
            <small className="text-slate-500 absolute top-3 right-2">Cm</small>
          </div>
          <div className="flex justify-evenly items-center">
            <span>
              <input
                type="radio"
                name="male"
                value="male"
                onClick={e => setGender(e.target.value)}
              />
              <label
                htmlFor=""
                className="px-3 text-white
              "
              >
                Maculino
              </label>
            </span>
            <span>
              <input
                type="radio"
                name="female"
                value="female"
                onClick={e => setGender(e.target.value)}
              />
              <label htmlFor="" className="px-3 text-white">
                Feminino
              </label>
            </span>
          </div>
          <div className="flex-center gap-x-5">
            <ButtonForms
              calcBMI={calcBMI}
              text="Calcular"
              buttonType="calculate"
            />
            <ButtonForms
              clearFields={clearFields}
              text="Limpar"
              buttonType="clear"
            />
          </div>
        </form>
        <div className="flex flex-col gap-y-2 p-2 mb-5 lg:mb-0">
          <>{info?.bmr ? <h3>Resultados</h3> : null}</>
          <>{info?.bmr ? <p>Seu TMB: {info?.bmr.toFixed(2)}</p> : null}</>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <p>
          A taxa metabólica basal (TMB) é a quantidade de energia necessária
          para descansando em um ambiente temperado quando o sistema digestivo é
          inativo. É o equivalente a descobrir quanto gás deve ficar ocioso
          carro consome enquanto estacionado. Neste estado, a energia será
          utilizada apenas para manter os órgãos vitais, que incluem o coração,
          cérebro, rins, sistema nervoso, intestinos, fígado, pulmões, órgãos
          sexuais, músculos e pele. Para a maioria das pessoas, mais de ~70% da
          energia total (calorias) queimado todos os dias é devido à manutenção.
          A atividade física representa cerca de 20% da gasto e ~ 10% é usado
          para digestão de alimentos, também conhecido como termogênese. BMR é
          medido sob condições muito restritivas circunstâncias enquanto
          acordado. Uma medição precisa de TMB requer que um sistema nervoso
          simpático da pessoa está inativo, o que significa que o pessoa deve
          estar completamente descansada. O metabolismo basal é geralmente o
          maior componente das necessidades calóricas totais de uma pessoa. a
          caloria diária necessidades é o valor BMR multiplicado por um fator
          com um valor entre 1,2 e 1,9, dependendo do nível de atividade. Na
          maioria das situações, o TMB é estimado com equações de resumo de
          dados estatísticos. O A Equação de Harris-Benedict foi uma das
          primeiras equações introduzidas. Foi revisado em 1984 para ser mais
          preciso e foi usado até 1990, quando a equação de Mifflin-St Jeor foi
          introduzida. O Mifflin-St Jeor A equação tem se mostrado mais precisa
          do que a versão revisada. Equação de Harris-Benedict. A fórmula de
          Katch-McArdle é ligeiramente diferente na medida em que calcula o
          gasto energético diário em repouso (RDEE), que leva em consideração a
          massa corporal magra, algo que nem a equação de Mifflin-St Jeor nem a
          de Harris-Benedict o fazem. Em Dessas equações, a equação de
          Mifflin-St Jeor é considerada a mais equação precisa para calcular BMR
          com a exceção de que o A fórmula de Katch-McArdle pode ser mais
          precisa para pessoas mais magras e conheça seu percentual de gordura
          corporal. Você pode escolher a equação a ser usado no cálculo,
          expandindo as configurações.
        </p>
      </div>
    </div>
  );
}
