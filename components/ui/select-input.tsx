import { type FC } from "react";

type SelectInputProps = {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectOptions: string[];
  setSelectOptions: (newValues: string[]) => void;
  allowMultiples?: boolean;
};

export const SelectInput: FC<SelectInputProps> = ({
  type,
  text,
  id,
  selectOptions,
  setSelectOptions,
  allowMultiples,
}) => {
  const handleOptionChange = (option: string) => {
    if (allowMultiples) {
      const currentIndex = selectOptions.indexOf(option);
      const newSelectedOptions = [...selectOptions];
      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex, 1);
      }
      setSelectOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectOptions(newSelectedOptions);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
