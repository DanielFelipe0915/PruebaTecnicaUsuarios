import React, { forwardRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "./index";
import { Props } from "./types";
import { Tooltip } from "@mui/material";

const InputPasswordComponent: React.FC<Props> = ({
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
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <Input
      key={key}
      className={className}
      id={id}
      type={showPassword ? "text" : "password"}
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
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={`${showPassword ? "Ocultar clave" : "Ver clave"}`}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
};

const InputPassword = forwardRef((props: Props, ref) => (
  <InputPasswordComponent {...props} forwardRef={ref} />
));
InputPassword.displayName = "InputPassword";
export default InputPassword;
