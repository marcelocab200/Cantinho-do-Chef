import React from "react";
import "./styles.scss";

type InputProps = {
  label?: string;
  placeholder: string;
  text?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({ label, placeholder, text, value, onChange }: InputProps) {
  return (
    <div className="Input-container">
      {/* Se houver label, renderiza o componente */}
      {label && <label>{label}</label>}
      <input className="Input" type="text" name={label} placeholder={placeholder} value={value} onChange={onChange}>
        {text}
      </input>
    </div>
  );
}
