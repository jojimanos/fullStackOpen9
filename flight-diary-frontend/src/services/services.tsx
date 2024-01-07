import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types/types";
import { SetStateAction } from "react";

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const baseUrl = "http://localhost:3000/";

const getAllEntries = async () => {
  return axios
    .get<DiaryEntry[]>(`${baseUrl}api/diaries`)
    .then((response) => response.data);
};

const createNewEntry = async (
  newEntry: NewDiaryEntry,
  setError: React.Dispatch<SetStateAction<string>>
) => {
  return axios
    .post<DiaryEntry>(`${baseUrl}api/diaries`, newEntry)
    .then((response) => response.data)
    .catch((error) => {
      if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        setError(
          `Error: status: ${error.response?.status}, response: ${error.response?.data}`
        );
      } else {
        console.error(error);
        setError(error.message);
      }
    });
};
export { getAllEntries, createNewEntry };
