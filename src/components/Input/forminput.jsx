const FormInput = ({
  name = "",
  label = "",
  placeholder = "",
  value,
  setValue,
}) => {
  return (
    <label className="w-full flex flex-col gap-2">
      {label}
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#f1f1f1] rounded-lg px-4 h-[45px] outline-none"
      />
    </label>
  );
};
export default FormInput;
