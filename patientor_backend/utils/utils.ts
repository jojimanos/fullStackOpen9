import { Patient } from "../types/types";
import { parseAllExceptGender, parseGender } from "./parsers/parsers";

const parseNewPatientEntryType = (object: unknown): Patient => {
  if (!object || typeof object !== "object") {
    throw new Error("malformated input data");
  }

  if (
    "id" in object &&
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatientEntry: Patient = {
      id: parseAllExceptGender(object.id),
      name: parseAllExceptGender(object.name),
      dateOfBirth: parseAllExceptGender(object.dateOfBirth),
      ssn: parseAllExceptGender(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseAllExceptGender(object.occupation),
    };
    return newPatientEntry;
  }

  throw new Error("malformated data");
};

export default parseNewPatientEntryType;
