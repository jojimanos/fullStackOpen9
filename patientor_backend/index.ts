import express from "express";
import cors from "cors";
import patientsRouter from "./services/patientsServices";
import diagnoseRouter from "./services/diagnosesServices";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = 3001;

app.get("/api/ping", async (req, res) => {
  console.log("this is a ping-pong testing");
  res.send("pong");
});

app.use("/api", patientsRouter);
app.use("/api", diagnoseRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
