'use client';

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
      <h3 className="text-2xl font-black">BMI healthy weight calculator</h3>
      <div className="flex flex-col lg:grid grid-cols-2">
        <form className="w-96 py-10 flex flex-col gap-y-3">
          <div className="relative">
            <input
              type="number"
              placeholder="Weight"
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
              placeholder="Height"
              className="w-80 lg:w-full py-3 px-2 bg-slate-100 rounded-xl outline-none"
              name="height"
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <small className="text-slate-500 absolute top-3 right-2">Cm</small>
          </div>
          <div className="flex-center gap-x-5">
            <button
              type="submit"
              onClick={calcBMI}
              className="w-32 h-10 flex-center border hover:bg-zinc-500 hover:text-white transition-colors rounded-xl"
            >
              Calc
            </button>
            <button
              type="submit"
              onClick={clearFields}
              className="w-32 h-10 flex-center border bg-zinc-500 hover:bg-white hover:text-black text-white transition-colors rounded-xl"
            >
              Clear
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-y-2 p-2 mb-5 lg:mb-0">
          <>{info?.bmi ? <h3 className="bg-zinc-300">Results</h3> : null}</>
          <>{info?.bmi ? <p>Your BMI: {info?.bmi}</p> : null}</>
          <>{info?.health ? <p>Your Health: {info?.health}</p> : null}</>
          <>
            {info?.healthy_bmi_range ? (
              <p>Healthy BMI Range: {info?.healthy_bmi_range}</p>
            ) : null}
          </>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <h3 className="text-xl font-medium">BMI Introduction</h3>
        <p>
          BMI is a measurement of a person's leanness or corpulence based on
          their height and weight, and is intended to quantify tissue mass. It
          is widely used as a general indicator of whether a person has a
          healthy body weight for their height. Specifically, the value obtained
          from the calculation of BMI is used to categorize whether a person is
          underweight, normal weight, overweight, or obese depending on what
          range the value falls between. These ranges of BMI vary based on
          factors such as region and age, and are sometimes further divided into
          subcategories such as severely underweight or very severely obese.
          Being overweight or underweight can have significant health effects,
          so while BMI is an imperfect measure of healthy body weight, it is a
          useful indicator of whether any additional testing or action is
          required. Refer to the table below to see the different categories
          based on BMI that are used by the calculator.
        </p>
      </div>
      <div>
        <table className="mt-10 w-72 lg:w-96">
          <tbody>
            <tr>
              <th>Classification</th>
            </tr>
            <tr>
              <td>Severe Thinness</td>
              <td>{`<`} 16 </td>
            </tr>
            <tr>
              <td>Moderate Thinness</td>
              <td> 16 - 17 </td>
            </tr>
            <tr>
              <td>Mild Thinness</td>
              <td> 17 - 18.5 </td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5 - 25 </td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25 - 30</td>
            </tr>
            <tr>
              <td>Obese Class I</td>
              <td>30 - 35</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>35 - 40</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>{`>`} 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
