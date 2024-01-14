import { Gender, HealthCheckRating } from "../../types/types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isNumber = (number: unknown): number is number => {
  return typeof number === "number" || number instanceof Number;
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(gender);
};

const isHealthRating = (
  healthRating: number
): healthRating is HealthCheckRating => {
  return (
    healthRating === 0 ||
    healthRating === 1 ||
    healthRating === 2 ||
    healthRating === 3
  );
};
export { isString, isNumber, isGender, isHealthRating };
