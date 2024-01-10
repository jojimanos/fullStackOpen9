import { Diagnosis, Entry } from "../../types";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";

interface HospitalEntryProps {
  e: Entry;
  diagnoses: Diagnosis[];
}

const HospitalEntry = ({ e, diagnoses }: HospitalEntryProps) => {
  if (e.type === "Hospital")
    return (
      <TableRow>
        <TableCell>
          <DateRangeIcon />
          {e.date}
        </TableCell>
        <TableCell>Description: {e.description}</TableCell>
        <TableCell>Discharge Date: {e.discharge.date}</TableCell>
        <TableCell>Discharge Criteria: {e.discharge.criteria}</TableCell>
        {e.diagnosisCodes && (
          <TableCell>
            Diagnoses' Codes:
            {e.diagnosisCodes?.map((d, i) => (
              <Table key={i}>
                <TableBody>
                  <TableRow>
                    <TableCell>{d}</TableCell>
                    <TableCell>
                      {diagnoses.map((di) => (di.code === d ? di.name : null))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))}
          </TableCell>
        )}
        <TableCell>Specialist: {e.specialist}</TableCell>
      </TableRow>
    );
};

export default HospitalEntry;
