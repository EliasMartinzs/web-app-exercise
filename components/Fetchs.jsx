import { fetchMuscle } from '@/utils';

export default async function Fetchs({ children }) {
  const muscled = await fetchMuscle();

  return <div>{children}</div>;
}
