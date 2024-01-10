import { Patient } from "../types";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

interface PatientDetailsprops {
  patient: Patient;
}

const PatientDetails = ({ patient }: PatientDetailsprops) => {
  return (
    <Box margin={2}>
      <Card variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" fontWeight={800}>
                  Patient: {patient.name}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Gender:</TableCell>
              <TableCell>Occupation:</TableCell>
              <TableCell>Birth Date:</TableCell>
              <TableCell>SSN:</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {patient.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
              </TableCell>
              <TableCell>{patient.occupation}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.ssn}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
};

export default PatientDetails;
