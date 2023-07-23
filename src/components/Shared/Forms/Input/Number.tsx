import React, { forwardRef } from "react";
import Input from "./index";
import { Props } from "./types";

const InputNumberComponent: React.FC<Props> = ({
  key,
  id,
  name,
  className = "",
  size = "small",
  label = "",
  variant = "outlined",
  fullWidth = true,
  error = false,
  required = false,
  pattern,
  minLength,
  maxLength,
  helperText,
  disabled = false,
  onChange,
  ...props
}) => {
  return (
    <Input
      key={key}
      className={className}
      id={id}
      type={"number"}
      name={name}
      size={size}
      label={label}
      required={required}
      value={props.value}
      disabled={disabled}
      variant={variant}
      minLength={minLength}
      maxLength={maxLength}
      error={error}
      onChange={onChange}
      fullWidth={fullWidth}
      helperText={helperText}
    />
  );
};

const InputNumber = forwardRef((props: Props, ref) => (
  <InputNumberComponent {...props} forwardRef={ref} />
));

InputNumber.displayName = "InputNumber";
export default InputNumber;
