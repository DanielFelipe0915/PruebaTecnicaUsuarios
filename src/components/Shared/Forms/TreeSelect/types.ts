export interface OptionItem {
  id?: string | number;
  label?: string;
  children?: Array<OptionItem>;
}

export interface Props {
  id?: string;
  name?: string;
  options: Array<OptionItem>;
  label?: string;
  keyId?: string;
  keyText?: string;
  value?: any;
  onChange?: any;
  required?: boolean;
  error?: boolean;
  getOptionLabel?: any;
  getOptionSelected?: any;
  className?: string;
  filterOptions?: any;
  onInputChange?: any;
  helperText?: string;
  multiple?: boolean;
  placeholder?: string;
}
