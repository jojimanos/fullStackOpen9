import data from "../data/diagnoses";
import router from "express";
import { Diagnosis } from "../types/types";
import { parseDiagnosisType } from "../utils/utils";

const diagnoseRouter = router();

diagnoseRouter.get("/diagnoses", async (req, res) => {
  res.json(data);
});

export default diagnoseRouter;
