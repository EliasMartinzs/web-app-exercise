'use client';

import ButtonForms from '@/components/ButtonForms';
import { optionsCalculator } from '@/utils';
import { useState } from 'react';

export default function BMI() {
  const [bmi, setBmi] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const { info } = bmi;

  const clearFields = e => {
    e.preventDefault();
    setHeight('');
    setWeight('');
    setBmi('');
  };

  const calcBMI = e => {
    e.preventDefault();

    fetchData(weight, height);
  };

  const fetchData = async (weight, height) => {
    const response = await fetch(
      `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`,
      optionsCalculator
    );

    const data = await response.json();

    setBmi(data);
  };

  return (
    <div className="pt-40 padding-web w-full overflow-hidden">
      <h3 className="text-2xl font-black">Calculadora de peso saudável IMC</h3>
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
              type="text"
              placeholder="Altura"
              className="w-80 lg:w-full py-3 px-2 bg-slate-100 rounded-xl outline-none"
              name="height"
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <small className="text-slate-500 absolute top-3 right-2">Cm</small>
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
          <>{info?.bmi ? <h3>Resultados</h3> : null}</>
          <>{info?.bmi ? <p>Seu IMC: {info?.bmi}</p> : null}</>
          <>{info?.health ? <p>Sua Saúde: {info?.health}</p> : null}</>
          <>
            {info?.healthy_bmi_range ? (
              <p>Faixa de IMC saudável: {info?.healthy_bmi_range}</p>
            ) : null}
          </>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <h3 className="text-xl font-medium">BMI Introduction</h3>
        <p>
          O IMC é uma medida da magreza ou corpulência de uma pessoa baseada em
          sua altura e peso, e destina-se a quantificar a massa do tecido. Isto
          é amplamente utilizado como um indicador geral de se uma pessoa tem um
          peso corporal saudável para sua altura. Especificamente, o valor
          obtido do cálculo do IMC é usado para categorizar se uma pessoa é
          baixo peso, peso normal, sobrepeso ou obesidade, dependendo do que
          intervalo em que o valor cai. Essas faixas de IMC variam de acordo com
          fatores como região e idade, e às vezes são divididos em subcategorias
          como severamente abaixo do peso ou muito severamente obesas. Estar
          acima ou abaixo do peso pode ter efeitos significativos na saúde,
          portanto, embora o IMC seja uma medida imperfeita do peso corporal
          saudável, é uma indicador útil de se qualquer teste ou ação adicional
          é obrigatório. Consulte a tabela abaixo para ver as diferentes
          categorias com base no IMC que são usados pela calculadora.
        </p>
      </div>
      <div>
        <table className="mt-10 w-72 lg:w-96">
          <tbody>
            <tr>
              <th>Classificação</th>
            </tr>
            <tr>
              <td>Magreza Severa</td>
              <td>{`<`} 16 </td>
            </tr>
            <tr>
              <td>Magreza Moderada</td>
              <td> 16 - 17 </td>
            </tr>
            <tr>
              <td>Magreza Leve</td>
              <td> 17 - 18.5 </td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5 - 25 </td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>25 - 30</td>
            </tr>
            <tr>
              <td>Obeso Class I</td>
              <td>30 - 35</td>
            </tr>
            <tr>
              <td>Obeso Class II</td>
              <td>35 - 40</td>
            </tr>
            <tr>
              <td>Obeso Class II</td>
              <td>{`>`} 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
