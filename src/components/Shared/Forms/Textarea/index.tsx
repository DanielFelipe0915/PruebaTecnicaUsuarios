import React from "react";
import { CallbackType } from "../../Types/types";
import { InputContainer } from "./styles";
import { Props as InputProps } from "../Input/types";

export interface Props extends InputProps {
  type?: string;
  required?: boolean;
  pattern?: string;
  className?: string;
  value?: string;
  label?: string;
  onChange?: CallbackType<any>;
  id?: string;
  rows?: number;
  extra?: any;
  placeholder?: string;
  name?: string;
  onFocus?: CallbackType<any>;
  onBlur?: CallbackType<any>;
  inblock?: boolean;
}

const Textarea: React.FC<Props> = ({
  type = "text",
  required = false,
  pattern = null,
  className = "",
  value = "",
  label = "",
  onChange = () => {},
  id,
  rows = 3,
  extra,
  placeholder = "",
  name = null,
  onFocus = () => {},
  onBlur = () => {},
  inblock = false,
  ...props
}) => {
  const onFocusFn = (event: any) => {
    const control = event.target;
    const element = control.parentNode.parentNode.parentNode.parentNode;
    element.classList.remove("filled");
    element.classList.add("focus");
    element.classList.add("focused");
    typeof onFocus === "function" && onFocus(event);
  };

  const onBlurFn = (event: any) => {
    const control = event.target;
    const element = control.parentNode.parentNode.parentNode.parentNode;
    if (control.value.trim() == "") {
      element.classList.remove("focus");
    } else {
      element.classList.add("filled");
    }
    element.classList.remove("focused");
    typeof onBlur === "function" && onBlur(event);
  };

  const render = () => {
    const inputFilled = value && value.trim() != "";
    label = label.trim() == "" ? placeholder : label;
    return (
      <InputContainer className="textarea-container">
        <div
          className={`input-container ${className} ${
            inputFilled ? "focus filled" : ""
          }`}
        >
          <div className="input-content">
            <label className={`${inputFilled ? "filled" : ""}`}>{label}</label>
            <div className="input-controls">
              <div className="form-control-container">
                <textarea
                  name={name}
                  type={type}
                  required={required}
                  className="input-input"
                  rows={rows}
                  onFocus={onFocusFn}
                  value={value}
                  onBlur={onBlurFn}
                  onChange={onChange}
                  {...extra}
                  {...props}
                />
                <fieldset className={`${inputFilled ? "input-filled" : ""}`}>
                  <legend>
                    <span>{label}</span>
                  </legend>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </InputContainer>
    );
  };

  return render();
};

export default Textarea;
