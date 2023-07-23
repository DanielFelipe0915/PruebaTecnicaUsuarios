import { TextField } from "@mui/material";
import React, { forwardRef } from "react";
import { Props } from "./types";

const InputComponent: React.FC<Props> = ({
  key,
  forwardRef,
  id,
  type = "text",
  name,
  label,
  variant = "outlined",
  className,
  value = "",
  size = "small",
  minLength,
  maxLength,
  onChange,
  required,
  fullWidth = true,
  disabled,
  helperText,
  placeholder,
  InputProps,
  error,
}) => {
  return (
    <TextField
      key={key}
      ref={forwardRef}
      id={id}
      type={type}
      size={size}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      helperText={helperText}
      placeholder={placeholder}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      className={className}
      InputProps={InputProps}
      inputProps={{
        minLength,
        maxLength,
      }}
      error={error}
    />
  );
};

const Input = forwardRef((props: Props, ref) => (
  <InputComponent {...props} forwardRef={ref} />
));
Input.displayName = "Input";
export default Input;
