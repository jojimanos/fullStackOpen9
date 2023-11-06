import router from "express";
import data from "../data/patients";
import { Patient } from "../types/types";

const patientsRouter = router()

patientsRouter.get('/patients', async (req, res) => {
    
    const patients = (): Omit<Patient, 'ssn'>[] => {
        return data.map(({id, name, dateOfBirth, gender, occupation}) => ({
            id, name, dateOfBirth, gender, occupation
        })) 
    }

    console.log(patients())

    res.json(patients())
}, )

export default patientsRouter