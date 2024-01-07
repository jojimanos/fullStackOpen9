import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Patient } from "../types";
import patients from "../services/patients";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PatientView = () => {
  //   let params = useParams();

  //   if (params.id === undefined)
  //   return <div>Loading...</div>
  //
  //   const patient = patients.filter((p) => p.id === params.id);

  //   console.log(patient)
  const { id } = useParams<{ id: string }>();

  console.log(id);
  const [patient, setPatient] = useState<Patient[]>();

  useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = await patients.getOne(id as string);
      console.log(fetchedPatient);
      setPatient(fetchedPatient);
    };
    void fetchPatient();
  }, []);

  if (patient === undefined) return <div>Loading...</div>;

  console.log(patient);

  return (
    <div>
      <Box>
        <Typography variant="h6">Patient: {patient[0].name}</Typography>
      </Box>
      <Table>
        <TableHead style={{marginBottom: "1em"}}>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>Occupation</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell>SSN</TableCell>
            </TableRow>
          <TableRow>
            <TableCell>{patient[0].gender}</TableCell>
            <TableCell>{patient[0].occupation}</TableCell>
            <TableCell>{patient[0].dateOfBirth}</TableCell>
            <TableCell>{patient[0].ssn}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PatientView;
