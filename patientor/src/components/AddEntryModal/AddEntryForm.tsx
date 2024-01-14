import { useState, SyntheticEvent, useEffect } from "react";

import {
  TextField,
  Grid,
  Button,
  NativeSelect,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

import { Diagnosis, EntryFormValues } from "../../types";
interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
  diagnoses: Diagnosis[];
}

const AddEntryForm = ({ onCancel, onSubmit, diagnoses }: Props) => {
  const [type, setType] = useState<
    "Hospital" | "OccupationalHealthcare" | "HealthCheck"
  >("Hospital");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([]);
  const [healthCheckRating, setHealthCheckRating] = useState<number>(-1);
  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({
      type: type,
      description: description,
      date: date,
      specialist: specialist,
      diagnosisCodes: diagnosisCodes,
      healthCheckRating: healthCheckRating,
      discharge: {
        date: dischargeDate,
        criteria: dischargeCriteria,
      },
      employerName: employerName,
      sickLeave: {
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  //clear fields not required for each type
  useEffect(() => {
    if (type === "Hospital") {
      setEmployerName(""), setStartDate(""), setEndDate("");
      setHealthCheckRating(-1);
    } else if (type === "HealthCheck") {
      setDischargeDate(""), setDischargeCriteria("");
      setEmployerName(""), setStartDate(""), setEndDate("");
    } else {
      setHealthCheckRating(-1);
      setDischargeDate(""), setDischargeCriteria("");
    }
    console.log(
      employerName,
      startDate,
      endDate,
      healthCheckRating,
      dischargeDate,
      dischargeCriteria
    );
  }, [
    type,
    employerName,
    startDate,
    endDate,
    healthCheckRating,
    dischargeDate,
    dischargeCriteria,
  ]);
  console.log(diagnoses);

  return (
    <div>
      <form onSubmit={addEntry}>
        <InputLabel>Entry Type</InputLabel>
        <NativeSelect
          inputProps={{
            name: "type",
            id: "uncontrolled-native",
          }}
          onChange={(event) =>
            setType(
              event.target.value as
                | "Hospital"
                | "OccupationalHealthcare"
                | "HealthCheck"
            )
          }
        >
          <option value={"Hospital"}>Hospital</option>
          <option value={"OccupationalHealthcare"}>
            Occupational Healthcare
          </option>
          <option value={"HealthCheck"}>Health Check</option>
        </NativeSelect>
        <InputLabel>Description</InputLabel>
        <TextField
          fullWidth
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <InputLabel>Date</InputLabel>
        <TextField
          fullWidth
          value={date}
          type="date"
          placeholder="YYYY-MM-DD"
          onChange={({ target }) => setDate(target.value)}
        />
        <InputLabel>Specialist</InputLabel>
        <TextField
          fullWidth
          value={specialist}
          onChange={({ target }) => setSpecialist(target.value)}
        />
        <InputLabel>Diagnosis Code</InputLabel>
        <NativeSelect
          value={diagnosisCode}
          onChange={({ target }) => setDiagnosisCode(target.value)}
        >
          {diagnoses &&
            diagnoses.map((d, i) => (
              <option key={i}>
                {d.code} {d.name}
              </option>
            ))}
        </NativeSelect>
        <Typography variant="h6">Diagnosis Codes:</Typography>
        {diagnosisCodes.map((d, i) => (
          <Box key={i}>
            {d},{" "}
            <Button
              //remove diagnosis codes from the array
              onClick={() =>
                setDiagnosisCodes(diagnosisCodes.filter((di) => di !== d))
              }
            >
              Remove Code
            </Button>
          </Box>
        ))}
        <Box margin={3}>
          <Button
            variant="contained"
            onClick={() => {
              setDiagnosisCodes(diagnosisCodes.concat(diagnosisCode));
              setDiagnosisCode("");
            }}
          >
            Add Diagnosis Code
          </Button>
        </Box>

        {type === "HealthCheck" ? (
          <>
            <InputLabel>Health Rating</InputLabel>
            <TextField
              placeholder="Health Rating"
              fullWidth
              value={healthCheckRating}
              type="number"
              onChange={({ target }) =>
                setHealthCheckRating(Number(target.value))
              }
            />
          </>
        ) : null}
        {type === "Hospital" ? (
          <>
            <InputLabel>Discharge Date</InputLabel>
            <TextField
              fullWidth
              type="date"
              value={dischargeDate}
              onChange={({ target }) => setDischargeDate(target.value)}
            />
            <InputLabel>Discharge Criteria</InputLabel>
            <TextField
              fullWidth
              value={dischargeCriteria}
              onChange={({ target }) => setDischargeCriteria(target.value)}
            />
          </>
        ) : null}
        {type === "OccupationalHealthcare" ? (
          <>
            <InputLabel>Employer Name</InputLabel>
            <TextField
              fullWidth
              value={employerName}
              onChange={({ target }) => setEmployerName(target.value)}
            />
            <InputLabel>Start Date</InputLabel>
            <TextField
              fullWidth
              type="date"
              value={startDate}
              onChange={({ target }) => setStartDate(target.value)}
            />
            <InputLabel>End Date</InputLabel>
            <TextField
              fullWidth
              type="date"
              value={endDate}
              onChange={({ target }) => setEndDate(target.value)}
            />
          </>
        ) : null}
        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddEntryForm;
