import { HTMLInputTypeAttribute } from "react";
import * as S from "./styles";

interface Input {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  pattern?: RegExp;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  value: string;
  step?: string;
  onChange(newValue: string): void;
}

export const InputAtom = ({
  placeholder,
  value,
  onChange,
  type,
  step,
  inputMode,
  minLength,
  maxLength,
  min,
  max,
}: Input) => {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type={type}
      inputMode={inputMode}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      step={step}
    />
  );
};
