export interface Entry {}

type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
};

enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export { Patient, Gender };

export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">;
