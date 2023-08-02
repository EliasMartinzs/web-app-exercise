'use client';

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
      <h3 className="text-2xl font-black">Body Fat Calculator</h3>
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
          <>{info?.bfp ? <h3 className="bg-zinc-300">Results</h3> : null}</>
          <>{info?.bfp ? <p>Your bfp: {info?.bfp.toFixed(2)}</p> : null}</>
          <>
            {info?.fat_mass ? (
              <p>Your fat mass: {info?.fat_mass.toFixed(2)}</p>
            ) : null}
          </>
          <>
            {info?.lean_mass ? <p>Your lean mass: {info?.lean_mass}</p> : null}
          </>
          <>
            {info?.description ? <p>Your shape: {info?.description}</p> : null}
          </>
        </div>
      </div>
      <div className="flex-start flex-col gap-y-3">
        <p>
          The Body Fat Calculator can be used to estimate your total body fat
          based on specific measurements. Use the "Metric Units" tab if you are
          more comfortable with the International System of Units (SI). To get
          the best results, measure to the nearest 1/4 inch (0.5 cm). This
          calculation is based on the U.S. Navy method, but also includes the
          calculation of body fat percentage using the BMI method (both of which
          are outlined below).
        </p>
        <h3 className="text-xl font-medium">Reference</h3>
        <p>The American Council on Exercise Body Fat Categorization</p>
        <div className="flex-start flex-col">
          <table className="mt-10 w-72 lg:w-96">
            <tbody>
              <tr>
                <th>Description</th>
                <th>Woman</th>
                <th>Men</th>
              </tr>
              <tr>
                <td>Essential fat</td>
                <td>10 - 13%</td>
                <td>2 - 5%</td>
              </tr>
              <tr>
                <td>Athletes</td>
                <td>14 - 20%</td>
                <td>6 - 13%</td>
              </tr>
              <tr>
                <td>Fitness</td>
                <td>21 - 24%</td>
                <td>14 - 17%</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>25 - 31%</td>
                <td>18 - 24%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium">
          Body Fat, Overweight, and Obesity
        </h3>
        <p>
          The scientific term for body fat is "adipose tissue." Adipose tissue
          serves a number of important functions. Its primary purpose is to
          store lipids from which the body creates energy. In addition, it
          secretes a number of important hormones, and provides the body with
          some cushioning as well as insulation.
          <br />
          Body fat includes essential body fat and storage body fat. Essential
          body fat is a base level of fat that is found in most parts of the
          body. It is necessary fat that maintains life and reproductive
          functions. The amount of essential fat differs between men and women,
          and is typically around 2-5% in men, and 10-13% in women. The healthy
          range of body fat for men is typically defined as 8-19%, while the
          healthy range for women is 21-33%. While having excess body fat can
          have many detrimental effects on a person's health, insufficient body
          fat can have negative health effects of its own, and maintaining a
          body fat percentage below, or even at the essential body fat
          percentage range is a topic that should be discussed with a medical
          professional.
          <br />
          <br />
          Storage fat is fat that accumulates in adipose tissue, be it
          subcutaneous fat (deep under the dermis and wrapped around vital
          organs) or visceral fat (fat located inside the abdominal cavity,
          between organs), and references to body fat typically refer to this
          type of fat. While some storage fat is ideal, excess amounts of
          storage fat can have serious negative health implications.
          <br />
          <br />
          Excess body fat leads to the condition of being overweight and
          eventually to obesity given that insufficient measures are taken to
          curb increasing body fat. Note that being overweight does not
          necessarily indicate an excess of body fat. A person's body weight is
          comprised of multiple factors including (but not limited to) body fat,
          muscle, bone density, and water content. Thus, highly muscular people
          are often classified as overweight.
          <br />
          <br />
          The rate at which body fat accumulates is different from person to
          person and is dependent on many factors including genetic factors as
          well as behavioral factors such as lack of exercise and excessive food
          intake. Due to varying factors, it can be more difficult for certain
          people to reduce body fat stored in the abdominal region. However,
          managing diet and exercise has been shown to reduce stored fat. Note
          that both women and men store body fat differently and that this can
          change over time. After the age of 40 (or after menopause in some
          cases for women), reduced sexual hormones can lead to excess body fat
          around the stomach in men, or around the buttocks and thighs of women.
        </p>
      </div>
    </div>
  );
}
