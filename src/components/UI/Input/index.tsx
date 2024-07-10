import React from "react";
import "./styles.scss";

type InputProps = {
  label?: string;
  placeholder: string;
  options?: string[];
  type?: string;
  text?: string;
};

export default function Input({
  label,
  placeholder,
  options,
  type,
  text,
}: InputProps) {
  return (
    <div
      className="Input-container"
      style={type === "textarea" ? { height: "100%" } : {}}
    >
      {label && <label>{label}</label>}
      {type === "text" ? (
        <input className="Input" type="text" placeholder={placeholder}>
          {text}
        </input>
      ) : type !== "textarea" ? (
        <select className="Input">
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          className="Input"
          name={label}
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
}
