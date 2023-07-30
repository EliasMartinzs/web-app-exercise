import GetInfos from '@/components/GetInfos';

export default function Home({ searchParams }) {
  const { query } = searchParams;
  return (
    <main className="padding-web">
      <GetInfos />
    </main>
  );
}
