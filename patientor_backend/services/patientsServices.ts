import router from "express";
import data from "../data/patients";
import { Entry, Gender, Patient } from "../types/types";
import { v1 as uuidv4 } from "uuid";
import { parseNewPatientEntryType } from "../utils/utils";
import {
  parseDiagnosisCodes,
  parseHealthRating,
} from "../utils/parsers/parsers";

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

patientsRouter.post("/patients/:id/entries", async (req, res, next) => {
  try {
    let body = req.body;

    const newEntry = (): Entry | null => {
      switch (body.type) {
        case "Hospital":
          return {
            id: body.id,
            type: body.type,
            description: body.description,
            date: body.date,
            specialist: body.specialist,
            diagnosisCodes: parseDiagnosisCodes(body),
            discharge: body.discharge,
          };
        case "OccupationalHealthCare":
          return {
            id: body.id,
            type: body.type,
            description: body.description,
            date: body.date,
            specialist: body.specialist,
            diagnosisCodes: parseDiagnosisCodes(body),
            employerName: body.employerName,
            sickLeave: {
              startDate: body.startDate,
              endDate: body.endDate,
            },
          };
        case "HealthCheck":
          return {
            id: body.id,
            type: body.type,
            description: body.description,
            date: body.date,
            specialist: body.specialist,
            diagnosisCodes: parseDiagnosisCodes(body),
            healthCheckRating: parseHealthRating(body.healthCheckRating),
          };
        default:
          return null;
      }
    };

    console.log("This is the new Entry", newEntry());

    if (newEntry() === null) {
      res.json("unspecified type");
      return new Error("unspecified type");
    } else {
      const patients = data.map((d) => parseNewPatientEntryType(d));
      const patient = data.filter((d) => d.id === req.params.id);

      const entries: Entry[] = patient[0].entries;
      entries.push(newEntry() as Entry);
      patients.map((p) =>
        p.id === req.params.id ? (p.entries = entries) : p.entries
      );
      res.json(entries);
    }
  } catch (error: any) {
    next(error.message);
    console.log("There was an error while registering the patient", error);
  }
});

export default patientsRouter;
