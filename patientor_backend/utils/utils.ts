import { Diagnosis, Entry, Patient } from "../types/types";
import { parseAllExceptGender, parseGender, parseEntries } from "./parsers/parsers";

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
    "occupation" in object &&
    "entries" in object
  ) {
    const newPatientEntry: Patient = {
      id: parseAllExceptGender(object.id),
      name: parseAllExceptGender(object.name),
      dateOfBirth: parseAllExceptGender(object.dateOfBirth),
      ssn: parseAllExceptGender(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseAllExceptGender(object.occupation),
      entries: parseEntries(object.entries)
    };
    return newPatientEntry;
  }

  throw new Error("malformated data");
};

const parseDiagnosisType = (object: unknown): Diagnosis => {
  if (!object || typeof object !== "object") {
    throw new Error("malformated input data");
  }

  if ("code" in object && "name" in object && "latin" in object) {
    const newPatientEntry: Diagnosis = {
      code: parseAllExceptGender(object.code),
      name: parseAllExceptGender(object.name),
      latin: parseAllExceptGender(object?.latin),
    };
    return newPatientEntry;
  }

  throw new Error("malformated data");
};

export {parseNewPatientEntryType, parseDiagnosisType};
