'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const search = e => {
    e.preventDefault();

    newParam(query);
    setQuery('');
  };

  const newParam = query => {
    const url = new URLSearchParams(window.location.search);

    if (query) {
      url.set('query', query);
    } else {
      url.delete('query');
    }

    const pathName = `${window.location.pathname}?${url.toString()}`;

    router.push(pathName);
  };

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search workouts"
        className="border-b py-2 w-full outline-none"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value.toLowerCase())}
      />
      <button onClick={search} type="submit" className="absolute top-2 right-5">
        <BsSearch />
      </button>
    </form>
  );
}
