import React from "react";
import "./styles.scss";

type InputProps = {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextAreaInput({
  label,
  placeholder,
  value,
  onChange
}: InputProps) {
  return (
    <div
      className="Input-container"
      style={{ height: "100%" }}
    >
      {label && <label>{label}</label>}
        <textarea
          className="Input"
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
    </div>
  );
}
