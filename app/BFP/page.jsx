'use client';

import ButtonForms from '@/components/ButtonForms';
import { optionsCalculator } from '@/utils';
import { useState } from 'react';

export default function BFP() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bfp, setBfp] = useState([]);

  const { info } = bfp;

  const clearFields = e => {
    e.preventDefault();
    setHeight('');
    setWeight('');
    setBfp('');
    setAge('');
    setGender('');
  };

  const calcBMI = e => {
    e.preventDefault();

    fetchData(weight, height, gender, age);
  };

  const fetchData = async (weight, height, gender, age) => {
    const response = await fetch(
      `https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`,
      optionsCalculator
    );

    const data = await response.json();

    setBfp(data);
  };

  return (
    <div className="pt-40 w-full padding-web overflow-hidden">
      <h3 className="text-2xl font-black">Calculadora de gordura corporal</h3>
      <div className="flex flex-col lg:grid grid-cols-2">
        <form className="w-96 py-10 flex flex-col gap-y-3 text-black">
          <div className="relative">
            <input
              type="number"
              placeholder="Altura"
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
              placeholder="Peso"
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
              placeholder="Age"
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
              <label htmlFor="" className="px-3 text-white">
                Masculino
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
          <>{info?.bfp ? <h3>Resultados</h3> : null}</>
          <>{info?.bfp ? <p>Seu CGC: {info?.bfp.toFixed(2)}</p> : null}</>
          <>
            {info?.fat_mass ? (
              <p>Sua Massa Gorda: {info?.fat_mass.toFixed(2)}</p>
            ) : null}
          </>
          <>
            {info?.lean_mass ? <p>Sua Massa Magra: {info?.lean_mass}</p> : null}
          </>
          <>
            {info?.description ? <p>Seu corpo: {info?.description}</p> : null}
          </>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <p>
          A calculadora de gordura corporal pode ser usada para estimar sua
          gordura corporal total com base em medições específicas. Use a guia
          "Unidades Métricas" se você estiver mais confortável com o Sistema
          Internacional de Unidades (SI). Obter Para melhores resultados, meça
          com precisão de 0,5 cm (1/4 de polegada). Que cálculo é baseado no
          método da Marinha dos EUA, mas também inclui o cálculo do percentual
          de gordura corporal pelo método do IMC (ambos são descritos abaixo).
        </p>
        <h3 className="text-xl font-medium">Referência</h3>
        <p>
          O Conselho Americano de Categorização de Gordura Corporal para
          Exercício
        </p>
        <div className="flex-start flex-col">
          <table className="mt-10 w-72 lg:w-96">
            <tbody>
              <tr>
                <th>Descrição</th>
                <th>Mulher</th>
                <th>Honens</th>
              </tr>
              <tr>
                <td>Gordura Essencial</td>
                <td>10 - 13%</td>
                <td>2 - 5%</td>
              </tr>
              <tr>
                <td>Atlestas</td>
                <td>14 - 20%</td>
                <td>6 - 13%</td>
              </tr>
              <tr>
                <td>Fitness</td>
                <td>21 - 24%</td>
                <td>14 - 17%</td>
              </tr>
              <tr>
                <td>Média</td>
                <td>25 - 31%</td>
                <td>18 - 24%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium">
          Gordura corporal, sobrepeso e obesidade
        </h3>
        <p>
          O termo científico para gordura corporal é "tecido adiposo". tecido
          adiposo desempenha uma série de funções importantes. Seu propósito
          primordial é armazenar lipídios a partir dos quais o corpo cria
          energia. Além disso, secreta uma série de hormônios importantes e
          fornece ao corpo algum amortecimento, bem como isolamento.
          <br />
          A gordura corporal inclui gordura corporal essencial e gordura
          corporal armazenada. Essencial gordura corporal é um nível básico de
          gordura que é encontrado na maior parte do corpo corpo. É a gordura
          necessária que mantém a vida e os órgãos reprodutivos funções. A
          quantidade de gordura essencial difere entre homens e mulheres, e é
          tipicamente cerca de 2-5% em homens e 10-13% em mulheres. o saudável
          faixa de gordura corporal para homens é normalmente definida como
          8-19%, enquanto o faixa saudável para as mulheres é de 21-33%. Embora
          o excesso de gordura corporal possa tem muitos efeitos nocivos sobre a
          saúde de uma pessoa, corpo insuficiente gordura pode ter efeitos
          negativos à saúde por conta própria, e manter um porcentagem de
          gordura corporal abaixo ou mesmo na gordura corporal essencial faixa
          percentual é um tema que deve ser discutido com um médico
          profissional.
          <br />
          <br />
          A gordura de reserva é a gordura que se acumula no tecido adiposo,
          seja gordura subcutânea (profundamente sob a derme e ao redor vital
          órgãos) ou gordura visceral (gordura localizada dentro da cavidade
          abdominal, entre órgãos), e as referências à gordura corporal
          geralmente se referem a este tipo de gordura. Enquanto um pouco de
          gordura de armazenamento é ideal, quantidades excessivas de A gordura
          armazenada pode ter sérias implicações negativas para a saúde.
          <br />
          <br />
          O excesso de gordura corporal leva à condição de sobrepeso e
          eventualmente à obesidade, pois medidas insuficientes são tomadas para
          reduzir o aumento da gordura corporal. Observe que o excesso de peso
          não indicam necessariamente um excesso de gordura corporal. O pesoq
          corporal de uma pessoa é composto por vários fatores, incluindo (mas
          não limitado a) gordura corporal, músculo, densidade óssea e teor de
          água. Assim, pessoas altamente musculosas são frequentemente
          classificados como sobrepeso.
          <br />
          <br />A velocidade com que a gordura corporal se acumula varia de
          pessoa para pessoa. pessoa e depende de muitos fatores, incluindo
          fatores genéticos, como bem como fatores comportamentais, como falta
          de exercício e excessos ingestão. Devido a vários fatores, pode ser
          mais difícil para certos pessoas para reduzir a gordura corporal
          armazenada na área abdominal. No entanto, Foi demonstrado que o
          gerenciamento de dieta e exercícios reduz a gordura armazenada.
          Observação que homens e mulheres armazenam gordura corporal de forma
          diferente e que isso pode Mudanças com o tempo. Após os 40 anos (ou
          após a menopausa em alguns casos para mulheres), hormônios sexuais
          reduzidos podem levar ao excesso de gordura corporal ao redor do
          estômago nos homens, ou ao redor das nádegas e coxas nas mulheres.
        </p>
      </div>
    </div>
  );
}
