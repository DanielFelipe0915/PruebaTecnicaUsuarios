import { EMAIL_REGEX } from "../constants/regex";

export const validText = (
  value: any,
  minLength?: number,
  maxLength?: number
): boolean => {
  const isValidText = value && typeof value === "string" && value.trim() != "";
  if (!isValidText) {
    return false;
  }
  if (minLength && value.length < minLength) {
    return false;
  }
  if (maxLength && value.length > maxLength) {
    return false;
  }
  return true;
};

export const validArray = (array: any, minLength: number = 0): boolean => {
  const isValidArray = Array.isArray(array) && array.length >= minLength;
  return isValidArray;
};

export const validEmail = (email: any) => {
  const isValidEmail =
    validText(email) && EMAIL_REGEX.test(String(email).toLowerCase());
  return isValidEmail;
};
