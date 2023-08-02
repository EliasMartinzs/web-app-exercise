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
      <h3 className="text-2xl font-black">Basal Metabolic Rate</h3>
      <div className="flex flex-col lg:grid grid-cols-2">
        <form className="w-96 py-10 flex flex-col gap-y-3 text-black">
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
              type="number"
              placeholder="Height"
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
              <label htmlFor="" className="px-3">
                Male
              </label>
            </span>
            <span>
              <input
                type="radio"
                name="female"
                value="female"
                onClick={e => setGender(e.target.value)}
              />
              <label htmlFor="" className="px-3">
                Female
              </label>
            </span>
          </div>
          <div className="flex-center gap-x-5">
            <ButtonForms
              calcBMI={calcBMI}
              text="Calculate"
              buttonType="calculate"
            />
            <ButtonForms
              clearFields={clearFields}
              text="Clear"
              buttonType="clear"
            />
          </div>
        </form>
        <div className="flex flex-col gap-y-2 p-2 mb-5 lg:mb-0">
          <>{info?.bmr ? <h3>Results</h3> : null}</>
          <>{info?.bmr ? <p>Your bmr: {info?.bmr.toFixed(2)}</p> : null}</>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <p>
          The basal metabolic rate (BMR) is the amount of energy needed while
          resting in a temperate environment when the digestive system is
          inactive. It is the equivalent of figuring out how much gas an idle
          car consumes while parked. In such a state, energy will be used only
          to maintain vital organs, which include the heart, brain, kidneys,
          nervous system, intestines, liver, lungs, sex organs, muscles, and
          skin. For most people, upwards of ~70% of total energy (calories)
          burned each day is due to upkeep. Physical activity makes up ~20% of
          expenditure and ~10% is used for the digestion of food, also known as
          thermogenesis. The BMR is measured under very restrictive
          circumstances while awake. An accurate BMR measurement requires that a
          person's sympathetic nervous system is inactive, which means the
          person must be completely rested. Basal metabolism is usually the
          largest component of a person's total caloric needs. The daily caloric
          need is the BMR value multiplied by a factor with a value between 1.2
          and 1.9, depending on activity level. In most situations, the BMR is
          estimated with equations summarized from statistical data. The
          Harris-Benedict Equation was one of the earliest equations introduced.
          It was revised in 1984 to be more accurate and was used up until 1990,
          when the Mifflin-St Jeor Equation was introduced. The Mifflin-St Jeor
          Equation has been shown to be more accurate than the revised
          Harris-Benedict Equation. The Katch-McArdle Formula is slightly
          different in that it calculates resting daily energy expenditure
          (RDEE), which takes lean body mass into account, something that
          neither the Mifflin-St Jeor nor the Harris-Benedict Equation does. Of
          these equations, the Mifflin-St Jeor Equation is considered the most
          accurate equation for calculating BMR with the exception that the
          Katch-McArdle Formula can be more accurate for people who are leaner
          and know their body fat percentage. You can pick the equation to be
          used in the calculation by expanding the settings.
        </p>
      </div>
    </div>
  );
}
