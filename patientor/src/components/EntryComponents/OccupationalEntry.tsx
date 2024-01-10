import { Diagnosis, Entry } from "../../types";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";

interface OccupationalEntryProps {
  e: Entry;
  diagnoses: Diagnosis[];
}

const OccupationalEntry = ({ e, diagnoses }: OccupationalEntryProps) => {
  if (e.type === "OccupationalHealthcare")
    return (
      <TableRow>
        <TableCell>
          <DateRangeIcon />
          {e.date}
        </TableCell>
        <TableCell>Description: {e.description}</TableCell>
        <TableCell>Employer Name:{e.employerName}</TableCell>

        {e.sickLeave && (
          <>
            <TableCell>Entered: {e.sickLeave.startDate}</TableCell>
            <TableCell>Left: {e.sickLeave.endDate}</TableCell>
          </>
        )}
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
        <TableCell>Specialist{e.specialist}</TableCell>
      </TableRow>
    );
};

export default OccupationalEntry;
