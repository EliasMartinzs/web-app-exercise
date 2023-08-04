'use client';

import { selectProgress } from '@/app/redux/features/user-selector';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CompareProgress() {
  const progress = useSelector(selectProgress);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);

  const test = (item1, item2) =>
    console.log(`item1 ${item1}--------------------item2${item2}`);

  return (
    <div className="pt-40 text-black">
      <h3>compare</h3>
      <div className="flex-between gap-x-28">
        <select onChange={e => setItem1(e.target.value)}>
          {progress &&
            progress.map(prog => <option value={prog.id}>{prog.date}</option>)}
        </select>
        <button onClick={test(item1, item2)}>compare</button>
        <select onChange={e => setItem2(e.target.value)}>
          {progress &&
            progress.map(prog => <option value={prog.id}>{prog.date}</option>)}
        </select>
      </div>
    </div>
  );
}
