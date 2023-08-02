import { tools } from '@/constants';
import Link from 'next/link';
import SelectedUser from './SelectedUser';
import SelectedMuscleUser from './SelectedMuscleUser';
import ClearUser from './ClearUser';

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`absolute w-full h-full top-0 effects ${
        isOpen ? 'left-0' : '-left-full'
      } `}
    >
      <div className="w-1/2 lg:w-96 h-screen bg-[#101820ff] z-50 flex-start flex-col">
        <div className="w-full flex-center py-5">
          <h4 className="font-black text-xl">Fitness Center</h4>
        </div>
        <div className="w-full px-2 lg:px-10 mt-5">
          <div className="mb-10 gap-y-1">
            <h4 className="font-black mb-3">Pefil</h4>
            <h3 className="flex gap-x-2">
              <span>Name:</span> <SelectedUser />
            </h3>
            <h3 className="flex gap-x-2">
              <span>Muscle: </span> <SelectedMuscleUser />
            </h3>
            <ClearUser isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div>
            <h4 className="font-black">Tools</h4>
            <span className="text-sm font-extralight flex flex-col gap-y-1 mt-3">
              {tools?.map(tool => (
                <Link
                  key={tool.name}
                  href={tool.link}
                  className="text-base hover:underline underline-offset-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {tool.name}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
