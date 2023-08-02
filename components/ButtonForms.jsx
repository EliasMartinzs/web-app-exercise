const BUTTON_TYPE = {
  calculate:
    'text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black',
  clear:
    'text-black bg-yellow-500 border-yellow-500 hover:text-white hover:bg-transparent',
};

export default function ButtonForms({
  calcBMI,
  clearFields,
  text,
  buttonType,
}) {
  return (
    <button
      type="submit"
      onClick={calcBMI || clearFields}
      className={`w-32 h-10 flex-center border rounded-full transition-colors ${BUTTON_TYPE[buttonType]}`}
    >
      {text}
    </button>
  );
}
