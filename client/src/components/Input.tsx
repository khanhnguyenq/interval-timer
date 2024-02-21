type InputProps = {
  label: string;
};

export default function Input({ label }: InputProps) {
  return (
    <label>
      {label}:
      <input
        className="border-red-100 border-2"
        name={label}
        type="number"
        min={0}
      />
    </label>
  );
}
