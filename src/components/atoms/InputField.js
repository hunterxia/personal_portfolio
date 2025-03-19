export default function InputField({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
}) {
  const inputType = type === "textarea" ? "textarea" : "input";
  const Element = inputType === "input" ? "input" : "textarea";

  return (
    <div className={`col-span-2 ${type === "input" ? "sm:col-span-1" : ""}`}>
      <label htmlFor={id} className="text-lg text-gray-900 dark:text-white">
        {label}
      </label>
      <Element
        id={id}
        type={type === "input" ? "text" : undefined}
        rows={type === "textarea" ? "4" : undefined}
        placeholder={placeholder}
        className={`mt-1 w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-purple-500 dark:focus:border-purple-400`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
