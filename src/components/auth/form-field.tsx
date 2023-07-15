import { ChangeEventHandler } from "react";

type FormFieldProps = {
  placeholder: string;
  id: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>
};

export default function FormField(props: FormFieldProps) {
  return (
    <input
      className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 text-center leading-tight focus:outline-none focus:shadow-outline"
      id={`${props.id}`}
      type={`${props.type}`}
      placeholder={`${props.placeholder}`}
      onChange={props.onChange}
    />
  );
}
