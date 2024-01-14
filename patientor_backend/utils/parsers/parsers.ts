import { isNumericLiteral } from "typescript";
import { Diagnosis, Entry, Gender, HealthCheckRating } from "../../types/types";
import { isString, isGender, isHealthRating, isNumber } from "./typeGuards";

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

const parseHealthRating = (value: unknown): HealthCheckRating => {
  if (!value || !isNumber(value) || !isHealthRating(value)) {
    throw new Error("malformated input: " + value + " is not a valid health rating")
  }

  return value as HealthCheckRating;
};

const parseEntries = (object: unknown): Array<Entry> => {
  if (!object || typeof object !== "object") {
    return [] as Array<Entry>;
  }
  return object as Array<Entry>;
};

const parseDiagnosisCodes = (object: unknown): Array<Diagnosis["code"]> => {
  if (!object || typeof object !== "object" || !("diagnosisCodes" in object)) {
    // we will just trust the data to be in correct form
    return [] as Array<Diagnosis["code"]>;
  }

  return object.diagnosisCodes as Array<Diagnosis["code"]>;
};

export {
  parseAllExceptGender,
  parseGender,
  parseDiagnosisCodes,
  parseEntries,
  parseHealthRating,
};
