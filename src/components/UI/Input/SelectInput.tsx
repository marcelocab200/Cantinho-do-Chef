import React from "react";
import "./styles.scss";

type InputProps = {
  label?: string;
  placeholder?: string;
  options: string[] | undefined;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectInput({
  label,
  options,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="Input-container">
      {/* Se houver label, renderiza o componente */}
      {label && <label>{label}</label>}
      <select className="Input" name={label} value={value} onChange={onChange}>
        {/* Recebe uma lista de options como parâmetro e as renderiza */}
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
