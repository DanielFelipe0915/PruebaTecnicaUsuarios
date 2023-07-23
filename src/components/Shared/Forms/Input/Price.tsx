import React, { forwardRef } from "react";
import Input from "./index";
import { Props, CustomProps } from "./types";
import NumberFormat from "react-number-format";

const NumberFormatCustom = React.forwardRef<NumberFormat<any>, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
);

const InputPriceComponent: React.FC<Props> = ({
  key,
  forwardRef,
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
      ref={forwardRef}
      className={className}
      id={id}
      name={name}
      size={size}
      label={label}
      required={required}
      value={props.value}
      disabled={disabled}
      minLength={minLength}
      maxLength={maxLength}
      variant={variant}
      onChange={onChange}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
      InputProps={{
        inputComponent: NumberFormatCustom as any,
      }}
    />
  );
};

const InputPrice = forwardRef((props: Props, ref) => (
  <InputPriceComponent {...props} forwardRef={ref} />
));
InputPrice.displayName = "InputPrice";
export default InputPrice;
