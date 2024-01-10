import router from "express";
import data from "../data/patients";
import { Entry, Gender, Patient } from "../types/types";
import { v1 as uuidv4 } from "uuid";
import { parseNewPatientEntryType } from "../utils/utils";

const patientsRouter = router();

patientsRouter.get("/patients", async (req, res) => {
  const patientsData: Patient[] = data.map((d: Patient) =>
    parseNewPatientEntryType(d)
  );

  const patients = (): Omit<Patient, "ssn">[] => {
    return patientsData.map(
      ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries,
      })
    );
  };

  console.log(patients());

  res.json(patients());
});

patientsRouter.get("/patients/:id", async (req, res) => {
  const patientsData: Patient[] = data.map((d: Patient) =>
    parseNewPatientEntryType(d)
  );

  const patient = () => {
    return patientsData.filter((p) => p.id === req.params.id);
  };
  console.log(patientsData);

  res.json(patient());
});

patientsRouter.post("/patients", async (req, res) => {
  try {
    const newPatient: Patient = {
      id: uuidv4(),
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      ssn: req.body.ssn,
      gender: req.body.gender,
      occupation: req.body.occupation,
      entries: req.body.entries,
    };
    data.push(newPatient);
    const patients: Patient[] = data.map((d: Patient) =>
      parseNewPatientEntryType(d)
    );
    patients.push(newPatient);
    res.json(patients);
  } catch (error) {
    console.log("There was an error while registering the patient", error);
  }
});

patientsRouter.post("/patients/:id/entries", async (req, res) => {
  try {
    // const newEntry: Entry = {
    // };
    // data.push(newPatient);
    // const patients: Patient[] = data.map((d: Patient) =>
      // parseNewPatientEntryType(d)
    // );
    // patients.push(newPatient);
    // res.json(patients);
  } catch (error) {
    console.log("There was an error while registering the patient", error);
  }
});

export default patientsRouter;
