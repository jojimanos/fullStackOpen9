import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Diagnosis, Entry } from "../types";
import HospitalEntry from "./EntryComponents/HospitalEntry";
import OccupationalEntry from "./EntryComponents/OccupationalEntry";
import HealthCheckEntry from "./EntryComponents/HealthCheckEntry";

interface EntryComponentProps {
  entries: Entry[];
  diagnoses: Diagnosis[];
}

const EntryComponent = ({ entries, diagnoses }: EntryComponentProps) => {
  return (
    <Box margin={2}>
      <Card variant="outlined">
        <Box padding={2}>
          <Typography variant="h6" fontWeight={800}>
            Entries:
          </Typography>
        </Box>
        <Table>
          <TableBody>
            {entries.map((e, i) => {
              switch (e.type) {
                case "Hospital":
                  return <HospitalEntry key={i} e={e} diagnoses={diagnoses} />;
                case "OccupationalHealthcare":
                  return <OccupationalEntry key={i} e={e} diagnoses={diagnoses} />;
                case "HealthCheck":
                  return <HealthCheckEntry key={i} e={e} diagnoses={diagnoses} />;
              }
            })}
          </TableBody>
        </Table>
        <Button variant="contained">ADD NEW ENTRY</Button>
      </Card>
    </Box>
  );
};

export default EntryComponent;
