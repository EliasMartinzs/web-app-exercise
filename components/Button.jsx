import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Button({ isOpen, setIsOpen }) {
  return (
    <button className="text-3xl z-50" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
}
