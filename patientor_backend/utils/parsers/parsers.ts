import { Gender } from "../../types/types";
import { isString, isGender } from "./typeGuards";

const parseAllExceptGender = (value: unknown): string => {
  if (!value || !isString(value)) {
    throw new Error("malformated input" + value);
  }

  return value;
};

const parseGender = (value: unknown): Gender => {
  if (!value || !isString(value) || !isGender(value)) {
    throw new Error("malformated input" + value);
  }

  return value;
};

export { parseAllExceptGender, parseGender };
