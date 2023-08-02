'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const search = e => {
    e.preventDefault();

    router.push(`/searched/${query}`);
  };

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search by name exercises"
        className="border-b py-2 w-full outline-none bg-transparent"
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
