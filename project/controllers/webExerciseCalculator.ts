import { Router } from "express";
import exerciseCalculator from "./middleware/exerciseCalculator";

const exerciseCalculatorRouter = Router();

exerciseCalculatorRouter.post("/exercise", (req, res) => {

    console.log(req.body)

    const target = req.body.target;
    const daily_exercises = req.body.daily_exercises

    try {
        const result = exerciseCalculator(target, daily_exercises)
        res.json(result)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log("malformatted parameters", error.message);
    }

});

export default exerciseCalculatorRouter;