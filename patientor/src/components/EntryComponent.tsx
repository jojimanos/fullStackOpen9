import { Box, Button, Card, Table, TableBody, Typography } from "@mui/material";
import { Diagnosis, Entry, EntryFormValues, Patient } from "../types";
import HospitalEntry from "./EntryComponents/HospitalEntry";
import OccupationalEntry from "./EntryComponents/OccupationalEntry";
import HealthCheckEntry from "./EntryComponents/HealthCheckEntry";
import AddEntryModal from "./AddEntryModal";
import patientService from "../services/patients";
import { SetStateAction, useState } from "react";
import axios from "axios";

interface EntryComponentProps {
  entries: Entry[];
  diagnoses: Diagnosis[];
  patientId: string;
  setPatient: React.Dispatch<SetStateAction<Patient[]>>;
}

const EntryComponent = ({
  entries,
  diagnoses,
  patientId,
  setPatient,
}: EntryComponentProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: EntryFormValues) => {
    try {
      await patientService.createEntry(values, patientId);
      const newPatients = await patientService.getAll();
      setPatient(newPatients.filter((p) => p.id === patientId));
      setModalOpen(false);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === "string") {
          console.error(e.response.data.replace(/(<([^>]+)>)/gi, ""));
          setError(e.response.data.replace(/(<([^>]+)>)/gi, ""));
        } else {
          setError("Unrecognized axios error");
        }
      } else {
        console.error("Unknown error", e);
        setError("Unknown error");
      }
    }
  };

  console.log(diagnoses)

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
                  return (
                    <OccupationalEntry key={i} e={e} diagnoses={diagnoses} />
                  );
                case "HealthCheck":
                  return (
                    <HealthCheckEntry key={i} e={e} diagnoses={diagnoses} />
                  );
              }
            })}
          </TableBody>
        </Table>
        <AddEntryModal
          modalOpen={modalOpen}
          onSubmit={submitNewEntry}
          onClose={closeModal}
          error={error}
          diagnoses={diagnoses}
        />
        <Button onClick={openModal} variant="contained">
          ADD NEW ENTRY
        </Button>
      </Card>
    </Box>
  );
};

export default EntryComponent;
