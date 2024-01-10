import { Box, Container } from "@mui/material";
import { Diagnosis, Patient } from "../types";
import patients from "../services/patients";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EntryComponent from "./EntryComponent";
import PatientDetails from "./PatientDetails";

const PatientView = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);
  const [patient, setPatient] = useState<Patient[]>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();

  useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = await patients.getOne(id as string);
      console.log(fetchedPatient);
      setPatient(fetchedPatient);
    };
    void fetchPatient();
    const fetchDiagnoses = async () => {
      const fetchedDiagnoses = await patients.getDiagnoses();
      console.log(fetchedDiagnoses);
      setDiagnoses(fetchedDiagnoses);
    };
    void fetchDiagnoses();
  }, []);

  if (patient === undefined || diagnoses === undefined)
    return <div>Loading...</div>;

  console.log(patient);

  return (
    <Container>
      <Box>
        <PatientDetails patient={patient[0]} />
        <EntryComponent entries={patient[0].entries} diagnoses={diagnoses} />
      </Box>
    </Container>
  );
};

export default PatientView;
