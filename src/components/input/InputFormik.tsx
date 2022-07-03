import { useField } from "formik";

interface InputFormikProps {
  name: string;
  placeholder: string;
}

const InputFormik = ({ name, placeholder, ...props }: InputFormikProps) => {
  const [field, meta] = useField(name);
  return (
    <>
      <input
        className="p-[14px] transition-all bg-white border border-gray92 rounded-lg outline-none focus:border-blue-500"
        {...field}
        placeholder={placeholder}
        {...props}
      />
      {meta.touched && meta.error && <p className="text-sm text-red-500">{meta.error}</p>}
    </>
  );
};

export default InputFormik;
