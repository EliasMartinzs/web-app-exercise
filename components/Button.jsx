export default function Button({ name, color }) {
  return (
    <button
      className={`bg-[${color}] w-28 h-8 flex-center rounded-xl font-bold hover:text-white hover:bg-[#172838] transition-colors`}
    >
      {name}
    </button>
  );
}
