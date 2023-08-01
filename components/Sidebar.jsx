import { tools } from '@/constants';
import Link from 'next/link';

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`absolute w-full h-full top-0 effects ${
        isOpen ? 'left-0' : '-left-full'
      } `}
    >
      <div className="w-1/2 lg:w-96 h-screen bg-zinc-300 z-50 flex-start flex-col">
        <div className="w-full flex-center py-5">
          <h4 className="font-black text-xl">Fitness Center</h4>
        </div>
        <div className="w-full px-2 lg:px-10 mt-5">
          <h4 className="font-black">Tools</h4>
          <span className="text-sm font-extralight flex flex-col gap-y-1 mt-3">
            {tools?.map(tool => (
              <Link
                key={tool.name}
                href={tool.link}
                className="text-base hover:underline underline-offset-4"
              >
                {tool.name}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </aside>
  );
}
