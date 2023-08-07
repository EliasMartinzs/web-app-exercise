import { TextField } from '@mui/material';
export default function InputProgress({
  name,
  type,
  onChange,
  value,
  placeHolder,
}) {
  return (
    <>
      <TextField
        variant="filled"
        name={name}
        type={type}
        label={placeHolder}
        onChange={onChange}
        value={value}
        className="w-full lg:w-96 bg-slate-100 rounded-xl"
        required
      />
    </>
  );
}
