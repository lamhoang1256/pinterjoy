import { Field, useField } from "formik";

interface SelectProps {
  name: string;
  categories: {
    name: string;
    image: string;
  }[];
}

const Select = ({ name, categories, ...props }: SelectProps) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Field
        as="select"
        id={name}
        className="border-[1px] p-[14px] border-gray92 rounded-md"
        {...field}
        {...props}
      >
        {categories?.map((category) => (
          <option value={category.name} key={category.name}>
            {category.name}
          </option>
        ))}
      </Field>
      {meta.error && <p className="text-sm text-red-500">{meta.error}</p>}
    </>
  );
};

export default Select;
